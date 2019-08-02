import React from 'react';

function EachHistory(props) {
  return(
    <li className='list-group-item history-element'>
      <p>{ props.search.city }</p>
      <div className='history-timestamp'>
        <p>{ props.search.time.toLocaleDateString(
          'en-US',
          { year: 'numeric', month: '2-digit', day: '2-digit' }
        ) }</p>
        <p>{ props.search.time.toLocaleTimeString(
          'en-US',
          { hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit' }
        ) }</p>
      </div>
    </li>
  );
}

export default EachHistory;