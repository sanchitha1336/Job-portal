// reducers/jobsReducer.js

import { FETCH_JOBS_REQUEST, FETCH_JOBS_SUCCESS, FETCH_JOBS_FAILURE } from './jobactions';

const initialState = {
  loading: false,
  jobs: [],
  error: ''
};

const jobsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_JOBS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_JOBS_SUCCESS:
      return {
        ...state,
        loading: false,
        jobs: action.payload,
        error: ''
      };
    case FETCH_JOBS_FAILURE:
      return {
        ...state,
        loading: false,
        jobs: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default jobsReducer;
