import React from 'react';

export default class CityInfo extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className="card">
          <div className="card-header">
              <p>City Information</p>
          </div>
          <div className="card-body">
              <h1>City Name</h1>
          </div>
        </div>
      </div>
    );
  }
}
