import { combineReducers } from 'redux';
import historyReducer from './history/historyReducer.js';
import searchReducer from './search/searchReducer.js';

const rootReducer = combineReducers({
    hisotry: historyReducer,
    search: searchReducer 
});

export default rootReducer;
