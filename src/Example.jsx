import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filters from "./FilterJob";
import JobList from "./JobList";
import { fetchJobs } from "./jobactions";

function Example() {
  const dispatch = useDispatch();
  const jobs = useSelector(state => state.jobs);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const endOfJobsRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    dispatch(fetchJobs(page)).then(() => {
      setLoading(false);
    });
  }, [dispatch, page]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setPage(prevPage => prevPage + 1);
      }
    }, { threshold: 1 });

    if (endOfJobsRef.current) {
      observer.observe(endOfJobsRef.current);
    }

    return () => {
      if (endOfJobsRef.current) {
        observer.unobserve(endOfJobsRef.current);
      }
    };
  }, [endOfJobsRef]);

  return (
    <div className="App">
      <Filters />
    { jobs?.jobs.length !==0 &&  <JobList jobs={jobs} />}
      {loading && <p>Loading...</p>}
      <div ref={endOfJobsRef}></div>
    </div>
  );
}

export default Example;
