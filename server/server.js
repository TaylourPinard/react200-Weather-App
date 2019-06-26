const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/search/:city', (req, res) => {
  axios.get(`api.openweathermap.org/data/2.5/weather?q=${req.params.city}&appid=${process.env.OPEN_WEATHER_API_KEY}`)
  .then(data => {
    res.status(200).json(data);
  })
  .catch(
    res.status(500).send('something went wrong with axios request')
  )
});

module.exports = app;
