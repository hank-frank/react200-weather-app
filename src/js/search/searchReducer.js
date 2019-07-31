import { UPDATES_SEARCH_VALUE, GET_WEATHER_INFO } from '../actions';  

const initialState = {
  searchValue: '',
  weatherData: {}
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATES_SEARCH_VALUE: {
      return {
        ...state,
        searchValue: action.payload.value
      };
    }
    case GET_WEATHER_INFO: {
      return {
        searchValue: '',
        weatherData: action.payload.data
      }, console.log(weatherData);
    };

    default: {
      return state;
    }
  }
}

// export default function searchReducer(state = initialState, action) {
//   switch (action.type) {
//     case UPDATES_SEARCH_VALUE: {
//       return {
//         ...state,
//         searchValue: action.payload.value
//       };
//     }
//     case `${FETCHES_WEATHER_DATA}_FULFILLED`: {
//       return {
//         searchValue: '',
//         weatherData: action.payload.data
//       };
//     }
//     default: {
//       return state;
//     }
//   }
// }
