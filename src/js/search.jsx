import React from 'react';

// const preloadedCities =
//   ['San Diego', 'New York', 'Washington DC', 'London', 'Tokyo'];

function Search(props) {
    return (
      <div className='mb-4'>
        <div className="button-group" role="group">
           <button>test button</button>
           <button>test button</button>
           <button>test button</button>
         </div>
        <div className="input-group">   
            <input className="form-controll"></input>
            <div className="input-group-append">
                <button className='btn btn-outline-secondary'></button>
       </div>
       </div>
    </div>
    );
  }
 
  export default Search;