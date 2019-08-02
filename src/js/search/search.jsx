import React from 'react';

const savedButtonCities =
  ['San Diego', 'Escondito', 'Portland', 'Detroit', 'Las Vegas'];


function Search(props) {
    return (
      <div className='search mb-4 justify-content-center'>
        <div className='btn-group'role='group'>
        {
          savedButtonCities.map(cityName =>
            <button
              type='button'
              className='btn btn-primary'
              value={ cityName }
              onClick={ props.handlePreload }
              key={ cityName }
            >
            { cityName }
            </button>
          )
        }
      </div>
        <div className="input-group search-input">   
            <input 
            className="form-controll input-large"
            id="search-input"
            placeholder="City"
            value={ props.searchValue } 
            onChange={ props.handleCaptureCity }
            
            ></input>
        <div className="input-group-append">
            <button 
            className='btn btn-outline-secondary'
            id="search-button"
            onClick={ props.handleSearch }
            >Search!</button>
       </div>
       </div>
    </div>
    );
  }
 
  export default Search;