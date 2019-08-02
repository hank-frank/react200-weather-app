import React from 'react';

function WeatherInfo (props) {

    return (
     <div className="card weathers">
          <div className="card-body">
              <p className="weather-parameter-name">{ props.name }</p>
              <p className="weather-parameter-value">{ props.value }</p>
          </div>
        </div>
    );
  }

  export default WeatherInfo;
