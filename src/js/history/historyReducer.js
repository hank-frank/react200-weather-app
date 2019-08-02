import { UPDATES_SEARCH_HISTORY } from '../actions';

const initialState = {
  searchHistory: []
};

export default function historyReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATES_SEARCH_HISTORY: {
      return {
        searchHistory: [...state.searchHistory, action.payload.search]
      };
    }
    default: {
      return state;
    }
  }
}
