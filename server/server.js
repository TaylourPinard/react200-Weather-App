const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const dotenv = require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/search/:city', (req, res) => {
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&appid=${process.env.OPEN_WEATHER_API_KEY}`)
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    res.status(500).send(`error in axios request ${error}`)
  });
});

module.exports = app;
