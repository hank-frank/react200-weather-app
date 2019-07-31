import { UPDATES_SEARCH_HISTORY } from '../actions';  

const initialState = {
  searchValue: '',
  weatherData: {}
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATES_SEARCH_HISTORY: {
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
