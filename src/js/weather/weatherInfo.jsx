import React from 'react';

function WeatherInfo (props) {

    return (
     <div className="card">
          <div className="card-body">
              <p>{ props.name }</p>
              <p>{ props.value }</p>
          </div>
        </div>
    );
  }

  export default WeatherInfo;
