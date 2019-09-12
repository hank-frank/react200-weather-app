import React from 'react';
import { connect } from 'react-redux';

import CityInfo from './weather/cityInfo.jsx';
import SearchHistory from './history/searchHistory.jsx';
import Search from './search/search.jsx';

import { updateSearchValue, searchWeather, updateSearchHistory } from './actions';

class App extends React.Component {
  constructor (props){
    super(props);

    this.handleCaptureCity = this.handleCaptureCity.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handlePreload = this.handlePreload.bind(this);
  }

  handleCaptureCity(event) {
    const { dispatch } = this.props;
   dispatch(updateSearchValue(event.target.value))
  };

  handleSearch () {
    const { dispatch } = this.props;
    dispatch(searchWeather(this.props.searchValue))
    dispatch(updateSearchHistory(this.props.searchValue));
  }

  handlePreload(event) {
    Promise.resolve(this.handleCaptureCity(event))
      .then(() => this.handleSearch())
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className='container'>
        <div className="jumbotron">
            <h1 className="text-left font-weight-light">SDCS Weather Application</h1>
            <h5 className="text-left font-weight-light">Always know if you'll need an umbrella!</h5>
        </div>
        <div className="col-xs-4 text-center">
          <div className="row justify-content-center"> 
        <Search
          searchValue = { this.searchValue }
          handleCaptureCity={ this.handleCaptureCity }
          handleSearch = { this.handleSearch }
          handlePreload = { this.handlePreload }
          ></Search>
          </div>
          </div>
        <div className="row">
          <div className="card-deck">
            <div className="col">
              <CityInfo
                 weatherData = { this.props.weatherData }
              ></CityInfo>
            </div>
            <div className="col">
              <SearchHistory
                  searchHistory = { this.props.searchHistory }
              ></SearchHistory>
            </div>
          </div>
      </div>
      </div>
    );
  }
}

function mapStoreToProps(store) {
  return {
    searchValue: store.search.searchValue,
    weatherData: store.search.weatherData,
    searchHistory: store.history.searchHistory
  };
}

export default connect (mapStoreToProps)(App);
