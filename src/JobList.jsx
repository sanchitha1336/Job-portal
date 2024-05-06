// JobList.js

import React from 'react';
import "./filter.css";

const JobList = ({ jobs }) => {
    console.log(jobs.jobs,"jobjs")
  return (
    <div className="job-list-container">
      {jobs.jobs.jdList.map(job => ( // Accessing `jdList` instead of `jobs` directly
        <div className="job-card" key={job.jdUid}> {/* Use `jdUid` as key */}
          <h3>{job.jobRole}</h3> {/* Use `jobRole` instead of `title` */}
          <p>{job.companyName}</p>
          <p>{job.location}</p>
          <p>{job.jobDetailsFromCompany}</p> {/* Use `jobDetailsFromCompany` instead of `description` */}
          <p>{`${job.minExp} - ${job.maxExp} years`}</p> {/* Combine minExp and maxExp */}
          <button>Apply</button>
        </div>
      ))}
    </div>
  );
};

export default JobList;
