// server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

let cachedData = null;

// Fetch function
const fetchData = async () => {
  try {
    const res = await axios.get('https://dummyjson.com/test');
    cachedData = res.data;
    console.log('Data updated:', new Date().toLocaleString());
  } catch (err) {
    console.error('Fetch failed:', err.message);
  }
};

// Fetch immediately and then every 3 hours
fetchData();
setInterval(fetchData, 3 * 60 * 60 * 1000); // 3 hours in ms

// API route
app.get('/api/data', (req, res) => {
  if (cachedData) {
    res.json(cachedData);
  } else {
    res.status(503).json({ error: 'Data not available yet' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
