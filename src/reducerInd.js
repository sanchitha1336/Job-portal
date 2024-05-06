
import { combineReducers } from 'redux';
import jobsReducer from './jobReducers';

const rootReducer = combineReducers({
    jobs: jobsReducer,
});

export default rootReducer;
