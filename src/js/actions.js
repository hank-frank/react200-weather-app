import axios from 'axios';

export const UPDATES_SEARCH_VALUE = 'UPDATES_SEARCH_VALUE';

export function updateSearchValue (value) {
    return {
        type: UPDATES_SEARCH_VALUE,
        payload: { value }
    };
}

  

// import { UPDATES_SEARCH_VALUE, FETCHES_WEATHER_DATA } from '../actions';

// const initialState = {
//   searchValue: '',
//   weatherData: {}
// };

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