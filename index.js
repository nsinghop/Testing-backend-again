// https://newsapi.org/v2/everything?q=technology&sortBy=publishedAt&apiKey=b58d7fe22dc2432d9e8be409f2b72912

const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

let TechnologyNews = null;


async function TechnologyFetch() {
  try {
    const response = await axios.get('https://newsapi.org/v2/everything?q=technology&sortBy=publishedAt&apiKey=b58d7fe22dc2432d9e8be409f2b72912');
    TechnologyNews = response.data;
    console.log("Data Updated", new Date().toLocaleString());
  } catch (error) {
    console.log("Error:", error.message);
  }
}

TechnologyFetch();
setInterval(TechnologyFetch, 1000 * 3600*3); 


app.get('/api/Technology', (req, res) => {
  if (TechnologyNews) {
    res.json(TechnologyNews);
  } else {
    res.status(503).json({ error: "Unable to fetch data" });
  }
});


app.get('/', (req, res) => {
  res.send('Welcome to my backend!');
});

app.listen(PORT, () => console.log(`Server Running at ${PORT}`));
