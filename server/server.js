const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/weather', (req, res, next) => {
axios
    .get(`https://www.metaweather.com/api/location/2487889`)
    .then(response => (
      {
        city: response.data.title,
        date: response.data.consolidated_weather[0].applicable_date,
        logo_link: `https://www.metaweather.com/static/img/weather/${response.data.consolidated_weather[0].weather_state_abbr}.svg`,
        coordinates: response.data.latt_long,
        temperature: truncateDecimal(farenheit(response.data.consolidated_weather[0].the_temp)),
        pressure: truncateDecimal(response.data.consolidated_weather[0].air_pressure),
        humidity: truncateDecimal(response.data.consolidated_weather[0].humidity),
        lowest_temp: truncateDecimal(farenheit(response.data.consolidated_weather[0].min_temp)),
        highest_temp: truncateDecimal(farenheit(response.data.consolidated_weather[0].max_temp)),
        wind_speed: truncateDecimal(response.data.consolidated_weather[0].wind_speed)
      },
      console.log(response.data)
    ));
});


    function farenheit(temperature) {
        return (temperature * 9 / 5) + 32;
      }
      
      function truncateDecimal(number) {
        return (Math.trunc(number * 100) / 100);
      }

module.exports = app;

// .then(axios.get(`https://www.metaweather.com/api/location/2487889`)