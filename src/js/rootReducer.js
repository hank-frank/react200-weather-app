import { combineReducers } from 'redux';
import historyReducer from './history/historyReducer.js';
import searchReducer from './search/searchReducer.js';

const rootReducer = combineReducers({
    history: historyReducer,
    search: searchReducer 
});

export default rootReducer;
