import React from 'react';
import WeatherInfo from './weatherInfo.jsx';

export default class CityInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let content;

    if (this.props.weatherData.error) {
      content =
        <div className="alert alert-danger" role="alert">
          Search didn't work playboy, try again...
        </div>
    } else {
      content =
        <div className='container'>
          <div className="card main-weather">
            <div className="card-header">
              <p>City Information</p>
            </div>
          <div className="card-body text-center">
            <img
              className='weather-icon'
              alt='weather logo'
              src={this.props.weatherData.logo_link}/>
              <br />
            <h1>{this.props.weatherData.city}</h1>
            <p className='coordinates'>Lat/Long:&nbsp;
                {this.props.weatherData.coordinates}</p>
            <div className="card-deck">
              <div className="row justify-content-center">
                <WeatherInfo
                  name="Temperature"
                  value = {this.props.weatherData.temperature}
                  ></WeatherInfo>
                <WeatherInfo
                  name="Pressure"
                  value = {this.props.weatherData.pressure}
                  ></WeatherInfo>
                <WeatherInfo
                  name="Humidity"
                  value = {this.props.weatherData.humidity}
                  ></WeatherInfo>
              </div>
              <div className="row justify-content-center">
                <WeatherInfo
                  name="Lowest Temp (F)"
                  value = {this.props.weatherData.lowest_temp}
                ></WeatherInfo>
                <WeatherInfo
                  name="Highest Temp (F)"
                  value = {this.props.weatherData.highest_temp}
                  ></WeatherInfo>
                <WeatherInfo
                  name="Wind Speed"
                  value = {this.props.weatherData.wind_speed}
                  ></WeatherInfo>
              </div>
              </div>
            </div>
          </div>
        </div>
        }
       return content;
  }
}
