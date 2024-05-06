// reducers/index.js

import { combineReducers } from 'redux';
import jobsReducer from './jobReducers';

const rootReducer = combineReducers({
    jobs: jobsReducer,
    // Add other reducers here if you have more
});

export default rootReducer;
