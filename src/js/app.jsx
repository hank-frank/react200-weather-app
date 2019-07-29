import React from 'react';
import CityInfo from './cityInfo.jsx'
import SearchHistory from './searchHistory.jsx'

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className="jumbotron">
            <h1 className="text-left font-weight-light">SDCS Weather Application</h1>
            <h5 className="text-left font-weight-light">Always know if you'll need an umbrella!</h5>
        </div>
        <div className="row">
          <div className="card-deck">
            <div className="col">
              <CityInfo></CityInfo>
            </div>
            <div className="col">
              <SearchHistory></SearchHistory>
            </div>
          </div>
      </div>
      </div>
    );
  }
}
