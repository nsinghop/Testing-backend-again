// // https://newsapi.org/v2/everything?q=technology&sortBy=publishedAt&country=in&apiKey=b58d7fe22dc2432d9e8be409f2b72912
// // Create New API at Time of Launch
// // Rather than Putting NUll we can Use preload Data something Shit Happens 
// // language -> 
// // GET https://newsapi.org/v2/everything?q=tech+startups&language=hi&sortBy=publishedAt&apiKey=YOUR_API_KEY
// // Create Top Headlines


// const express = require('express');
// const axios = require('axios');
// const cors = require('cors');

// const app = express();
// app.use(cors());

// const PORT = process.env.PORT || 5000;


// // For New's Feteching 

// // Home Page - Technology
// let technologyNews = null;

// async function fetchTechnology() {
//   try {
//     const response = await axios.get('https://newsapi.org/v2/everything?q=technology&sortBy=publishedAt&apiKey=9ee7e0e00e204f6aa891ce6e57ae98ea');
//     technologyNews = response.data;
//     console.log("Data Updated", new Date().toLocaleString());
//   } catch (error) {
//     console.log("Error technologyFeatch:", error.message);
//   }
// }

// fetchTechnology();
// // After Creating Rathing than Running Indiviually we can can make function wehere we call these together can 
// // and use setInterval How's my Idea
// setInterval(fetchTechnology, 1000 * 3600 * 3);


// app.get('/api/technology', (req, res) => {
//   if (technologyNews) {
//     res.json(technologyNews);
//   } else {
//     res.status(503).json({ error: "Unable to fetch data" });
//   }
// });

// // Crypto
// // https://newsapi.org/v2/everything?q=crypto&sortBy=publishedAt&country=in&apiKey=b58d7fe22dc2432d9e8be409f2b72912

// let cryptoNews = null;

// async function fetchCryptoNews() {
//   try {
//     let response = await axios.get("https://newsapi.org/v2/everything?q=crypto&sortBy=publishedAt&apiKey=9ee7e0e00e204f6aa891ce6e57ae98ea")
//     cryptoNews = response.data
//   } catch (error) {
//     console.log("Error fetchCryptoNews:", error.message)
//   }
// }

// fetchCryptoNews()
// setInterval(fetchCryptoNews, 1000*3600*3)

// app.get('/api/crypto',(req,res)=>{
//   if (cryptoNews){
//     res.json(cryptoNews)
//   }else{
//     res.status(503).json({ error: "Unable to Fetch Data" });
//   };
// })


// // Startups
// // https://newsapi.org/v2/everything?q=crypto&sortBy=publishedAt&country=in&apiKey=b58d7fe22dc2432d9e8be409f2b72912

// let startupNews = null;

// async function fetchStartupNews() {
//   try {
//     let response = await axios.get("https://newsapi.org/v2/everything?q=startup+startups&sortBy=publishedAt&apiKey=9ee7e0e00e204f6aa891ce6e57ae98ea")
//     startupNews = response.data
//   } catch (error) {
//     console.log("Error fetchStartupNess:", error.message)
//   }
// }

// fetchStartupNews()
// setInterval(fetchStartupNews, 1000*3600*3)

// app.get('/api/startup',(req,res)=>{
//   if (startupNews){
//     res.json(startupNews)
//   }else{
//     res.status(503).json({ error: "Unable to Fetch Data" });
//   };
// })



// // techStartups
// // https://newsapi.org/v2/everything?q=crypto&sortBy=publishedAt&country=in&apiKey=b58d7fe22dc2432d9e8be409f2b72912

// let techStartups = null;

// async function fetchTechStartupNews() {
//   try {
//     let response = await axios.get("https://newsapi.org/v2/everything?q=tech+startup&sortBy=publishedAt&apiKey=9ee7e0e00e204f6aa891ce6e57ae98ea")
//     techStartups = response.data
//   } catch (error) {
//     console.log("Error fetchStartupNess:", error.message)
//   }
// }

// fetchTechStartupNews()
// setInterval(fetchTechStartupNews, 1000*3600*3)

// app.get('/api/techstartup',(req,res)=>{
//   if (techStartups){
//     res.json(techStartups)
//   }else{
//     res.status(503).json({ error: "Unable to Fetch Data" });
//   };
// })


// // AINews
// // https://newsapi.org/v2/everything?q=crypto&sortBy=publishedAt&country=in&apiKey=b58d7fe22dc2432d9e8be409f2b72912

// let aiNews = null;

// async function fetchAINews() {
//   try {
//     let response = await axios.get("https://newsapi.org/v2/everything?q=AI&sortBy=publishedAt&apiKey=9ee7e0e00e204f6aa891ce6e57ae98ea")
//     aiNews = response.data
//   } catch (error) {
//     console.log("Error fetchAINews:", error.message)
//   }
// }

// fetchAINews()
// setInterval(fetchAINews, 1000*3600*3)

// app.get('/api/ainews',(req,res)=>{
//   if (aiNews){
//     res.json(aiNews)
//   }else{
//     res.status(503).json({ error: "Unable to Fetch Data" });
//   };
// })




// // inTechNews
// // https://newsapi.org/v2/everything?q=crypto&sortBy=publishedAt&country=in&apiKey=b58d7fe22dc2432d9e8be409f2b72912

// let inTechNews = null;

// async function fetchInTechNews() {
//   try {
//     let response = await axios.get("https://newsapi.org/v2/everything?q=tech+india&language=en&sortBy=publishedAt&apiKey=9ee7e0e00e204f6aa891ce6e57ae98ea")
//     inTechNews = response.data
//   } catch (error) {
//     console.log("Error fetchAINews:", error.message)
//   }
// }

// fetchInTechNews()
// setInterval(fetchInTechNews, 1000*3600*3)

// app.get('/api/intechnews',(req,res)=>{
//   if (inTechNews){
//     res.json(inTechNews)
//   }else{
//     res.status(503).json({ error: "Unable to Fetch Data" });
//   };
// })





// // business
// // https://newsapi.org/v2/everything?q=crypto&sortBy=publishedAt&country=in&apiKey=b58d7fe22dc2432d9e8be409f2b72912

// let businessNews = null;

// async function fetchBusinessNews() {
//   try {
//     let response = await axios.get("https://newsapi.org/v2/top-headlines?category=business&apiKey=9ee7e0e00e204f6aa891ce6e57ae98ea")
//     businessNews = response.data
//   } catch (error) {
//     console.log("Error fetchAINews:", error.message)
//   }
// }

// fetchBusinessNews()
// setInterval(fetchBusinessNews, 1000*3600*3)

// app.get('/api/bussiness',(req,res)=>{
//   if (businessNews){
//     res.json(businessNews)
//   }else{
//     res.status(503).json({ error: "Unable to Fetch Data" });
//   };
// })




// app.get('/', (req, res) => {
//   res.send('Welcome to my backend Created by one and Only Narendra Singh');
// });

// app.listen(PORT, () => console.log(`Server Running at ${PORT}`));




const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;


// For New's Feteching 

// Home Page - Technology
let technologyNews = null;

async function fetchTechnology() {
  try {
    const response = await axios.get('https://newsapi.org/v2/everything?q=technology&sortBy=publishedAt&apiKey=9ee7e0e00e204f6aa891ce6e57ae98ea');
    technologyNews = response.data;
    console.log("Data Updated", new Date().toLocaleString());
  } catch (error) {
    console.log("Error fetchTechnology:", error.message);
  }
}

fetchTechnology();
// After Creating Rather than Running Individually we can make a function where we call these together
// and use setInterval — How's my Idea
setInterval(fetchTechnology, 1000 * 3600 * 3);

app.get('/api/technology', (req, res) => {
  if (technologyNews) {
    res.json(technologyNews);
  } else {
    res.status(503).json({ error: "Unable to fetch data" });
  }
});

// Crypto
// https://newsapi.org/v2/everything?q=crypto&sortBy=publishedAt&country=in&apiKey=b58d7fe22dc2432d9e8be409f2b72912

let cryptoNews = null;

async function fetchCryptoNews() {
  try {
    let response = await axios.get("https://newsapi.org/v2/everything?q=crypto&sortBy=publishedAt&apiKey=9ee7e0e00e204f6aa891ce6e57ae98ea");
    cryptoNews = response.data;
  } catch (error) {
    console.log("Error fetchCryptoNews:", error.message);
  }
}

fetchCryptoNews();
setInterval(fetchCryptoNews, 1000 * 3600 * 3);

app.get('/api/crypto', (req, res) => {
  if (cryptoNews) {
    res.json(cryptoNews);
  } else {
    res.status(503).json({ error: "Unable to Fetch Data" });
  }
});

// Startups
// https://newsapi.org/v2/everything?q=startup+startups&sortBy=publishedAt&apiKey=b58d7fe22dc2432d9e8be409f2b72912

let startupNews = null;

async function fetchStartupNews() {
  try {
    let response = await axios.get("https://newsapi.org/v2/everything?q=startup+startups&sortBy=publishedAt&apiKey=9ee7e0e00e204f6aa891ce6e57ae98ea");
    startupNews = response.data;
  } catch (error) {
    console.log("Error fetchStartupNews:", error.message);
  }
}

fetchStartupNews();
setInterval(fetchStartupNews, 1000 * 3600 * 3);

app.get('/api/startup', (req, res) => {
  if (startupNews) {
    res.json(startupNews);
  } else {
    res.status(503).json({ error: "Unable to Fetch Data" });
  }
});

// techStartups
// GET https://newsapi.org/v2/everything?q=tech+startups&language=hi&sortBy=publishedAt&apiKey=YOUR_API_KEY

let techStartups = null;

async function fetchTechStartupNews() {
  try {
    let response = await axios.get("https://newsapi.org/v2/everything?q=tech+startup&sortBy=publishedAt&apiKey=9ee7e0e00e204f6aa891ce6e57ae98ea");
    techStartups = response.data;
  } catch (error) {
    console.log("Error fetchTechStartupNews:", error.message);
  }
}

fetchTechStartupNews();
setInterval(fetchTechStartupNews, 1000 * 3600 * 3);

app.get('/api/techstartup', (req, res) => {
  if (techStartups) {
    res.json(techStartups);
  } else {
    res.status(503).json({ error: "Unable to Fetch Data" });
  }
});

// AINews
// Create Top Headlines

let aiNews = null;

async function fetchAINews() {
  try {
    let response = await axios.get("https://newsapi.org/v2/everything?q=AI&sortBy=publishedAt&apiKey=9ee7e0e00e204f6aa891ce6e57ae98ea");
    aiNews = response.data;
  } catch (error) {
    console.log("Error fetchAINews:", error.message);
  }
}

fetchAINews();
setInterval(fetchAINews, 1000 * 3600 * 3);

app.get('/api/ainews', (req, res) => {
  if (aiNews) {
    res.json(aiNews);
  } else {
    res.status(503).json({ error: "Unable to Fetch Data" });
  }
});

// inTechNews
// Rather than Putting NULL we can Use preload Data something Shit Happens 

let inTechNews = null;

async function fetchInTechNews() {
  try {
    let response = await axios.get("https://newsapi.org/v2/everything?q=tech+india&language=en&sortBy=publishedAt&apiKey=9ee7e0e00e204f6aa891ce6e57ae98ea");
    inTechNews = response.data;
  } catch (error) {
    console.log("Error fetchInTechNews:", error.message);
  }
}

fetchInTechNews();
setInterval(fetchInTechNews, 1000 * 3600 * 3);

app.get('/api/intechnews', (req, res) => {
  if (inTechNews) {
    res.json(inTechNews);
  } else {
    res.status(503).json({ error: "Unable to Fetch Data" });
  }
});

// business
// https://newsapi.org/v2/top-headlines?category=business&apiKey=...

let businessNews = null;

async function fetchBusinessNews() {
  try {
    let response = await axios.get("https://newsapi.org/v2/top-headlines?category=business&apiKey=9ee7e0e00e204f6aa891ce6e57ae98ea");
    businessNews = response.data;
  } catch (error) {
    console.log("Error fetchBusinessNews:", error.message);
  }
}

fetchBusinessNews();
setInterval(fetchBusinessNews, 1000 * 3600 * 3);

app.get('/api/business', (req, res) => {
  if (businessNews) {
    res.json(businessNews);
  } else {
    res.status(503).json({ error: "Unable to Fetch Data" });
  }
});

app.get('/', (req, res) => {
  res.send('Welcome to my backend Created by one and Only Narendra Singh');
});

app.listen(PORT, () => console.log(`Server Running at ${PORT}`));
