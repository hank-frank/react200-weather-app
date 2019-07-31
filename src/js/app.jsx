import React from 'react';
import { connect } from 'react-redux';

import CityInfo from './weather/cityInfo.jsx';
import SearchHistory from './history/searchHistory.jsx';
import Search from './search/search.jsx';
//importing action creators
import { updateSearchValue, searchWeather } from './actions';

//state is accessable as props cause thats how the mapstoretoprops funciton/connect is passing it in. 
class App extends React.Component {
  constructor (props){
    super(props);
    this.handleCaptureCity = this.handleCaptureCity.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleCaptureCity(event) {
    const { dispatch } = this.props;
   dispatch(updateSearchValue(event.target.value))
  };

  handleSearch () {
    const { dispatch } = this.props;
    dispatch(searchWeather(this.props.searchValue))
  }


  render() {
    return (
      <div className='container'>
        <div className="jumbotron">
            <h1 className="text-left font-weight-light">SDCS Weather Application</h1>
            <h5 className="text-left font-weight-light">Always know if you'll need an umbrella!</h5>
        </div>
        <Search
        searchValue = { this.searchValue }
        handleCaptureCity={ this.handleCaptureCity }
        handleSearch = {this.handleSearch }
        ></Search>
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

function mapStoreToProps(store) {
  return {
    searchValue: store.search.searchValue,
   
  };
}

export default connect (mapStoreToProps)(App);
// (mapStoreToProps)
