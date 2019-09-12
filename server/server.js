const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

const woeids = {
    sandiego: 2487889,
    newyork: 2459115,
    washingtondc: 2514815,
    london: 44418,
    tokyo: 1118370
  };

  app.get('/weather', (req, res, next) => {
    const city = req.query.city;
  
    const cityModified = city.toLowerCase().replace(/\s/g, '');
    if (woeids[cityModified]) {
      const id = woeids[cityModified];
  
      return getWeatherData(id)
        .then(data => res.json(data))
        .then()
        .catch(err => next(err));
    } else {
      return getCityId(city)
        .then(id => {
          getWeatherData(id)
            .then(data => res.json(data))
            .catch(err => next(err));
        })
        .catch(err => next(err));
    }
  });

  app.get('/(*)', (req, res, next) => res.sendFile(path.join(__dirname, '../public/error.html'), (err) => next(err)));

function getWeatherData(id) {
    return axios
      .get(`https://www.metaweather.com/api/location/${id}`)
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
        }
      ));
  }
  
  function getCityId(city) {
    return axios
      .get(`https://www.metaweather.com/api/location/search/?query=${city}`)
      .then(response => response.data[0].woeid);
  }
  
  function farenheit(temperature) {
    return (temperature * 9 / 5) + 32;
  }
  
  function truncateDecimal(number) {
    return (Math.trunc(number * 100) / 100);
  }
  
module.exports = app;
