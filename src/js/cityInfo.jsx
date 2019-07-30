import React from 'react';
import WeatherInfo from './weatherinfo.jsx';

export default class CityInfo extends React.Component {
  render() {
    return (
    <div className='container'>
        <div className="card">
            <div className="card-header">
                <p>City Information</p>
            </div>
        <div className="card-body text-center">
            <h1>City Name</h1>
            <div className="card-deck">
            <div className="row">
            <WeatherInfo></WeatherInfo>
            <WeatherInfo></WeatherInfo>
            <WeatherInfo></WeatherInfo>
            </div>
            <div className="row">
            <WeatherInfo></WeatherInfo>
            <WeatherInfo></WeatherInfo>
            <WeatherInfo></WeatherInfo>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
