import React from 'react';
import EachHistory from './eachHistory';

function SearchHistory(props) {
  return(
    <div className='card history-card'
      style={{ display: props.searchHistory.length > 0 ? 'block' : 'none' }}
    >
      <div className='card-header'>Search History</div>
      <ul className='list-group list-group-flush'>
        { props.searchHistory.map((search, index) =>
         <EachHistory key={index} search={search}/>
        )}
      </ul>
    </div>
  );
}

export default SearchHistory;
