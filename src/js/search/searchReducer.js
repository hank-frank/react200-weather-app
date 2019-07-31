import { UPDATES_SEARCH_VALUE, FETCHES_WEATHER_DATA } from '../actions';  

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
    default: {
      return state;
    }
  }
}
