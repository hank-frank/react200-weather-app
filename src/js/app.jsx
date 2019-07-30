import React from 'react';
import CityInfo from './weather/cityInfo.jsx';
import SearchHistory from './history/searchHistory.jsx';
import Search from './search/search.jsx';


export default class App extends React.Component {
  constructor (props){
    super(props);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(event){
    dispatchEvent(update)
  }
  // handleDescriptionInput(event) {
  //   // dispatch was provided by connect()
  //   const { dispatch } = this.props;
  //   const { value } = event.target;
  //   dispatch(updateExpenseDescription(value));
  // }
// onChange(e) {
//     this.setState({ [e.target.name]: e.target.value })
//   }
  render() {
    return (
      <div className='container'>
        <div className="jumbotron">
            <h1 className="text-left font-weight-light">SDCS Weather Application</h1>
            <h5 className="text-left font-weight-light">Always know if you'll need an umbrella!</h5>
        </div>
        <Search
        
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
