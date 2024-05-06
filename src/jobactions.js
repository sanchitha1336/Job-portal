// actions/jobsActions.js

export const FETCH_JOBS_REQUEST = 'FETCH_JOBS_REQUEST';
export const FETCH_JOBS_SUCCESS = 'FETCH_JOBS_SUCCESS';
export const FETCH_JOBS_FAILURE = 'FETCH_JOBS_FAILURE';

export const fetchJobsRequest = () => ({
  type: FETCH_JOBS_REQUEST
});

export const fetchJobsSuccess = (jobs) => ({
  type: FETCH_JOBS_SUCCESS,
  payload: jobs
});

export const fetchJobsFailure = (error) => ({
  type: FETCH_JOBS_FAILURE,
  payload: error
});

export const fetchJobs = (page,filters) => {
  return (dispatch) => {
    dispatch(fetchJobsRequest());
    return fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...filters,
        "limit": 10,
        "offset": page // Pass the page parameter to fetch the correct page of data
      })
    })
    .then(response => response.json())
    .then(data => {
      dispatch(fetchJobsSuccess(data));
    })
    .catch(error => {
      dispatch(fetchJobsFailure(error.message));
      throw error; // Rethrow the error to be caught by the caller
    });
  };
};

  
