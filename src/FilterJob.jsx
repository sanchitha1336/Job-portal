// Filters.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchJobs } from './jobactions';
import "./filter.css"

const Filters = () => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    minExperience: '',
    companyName: '',
    location: '',
    remoteOnSite: '',
    techStack: '',
    role: '',
    minBasePay: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchJobs(filters));
  };

  return (
    <div className="filters-container">
      <form onSubmit={handleSubmit}>
        {/* Render filter inputs here */}
        <input type="text" name="minExperience" value={filters.minExperience} onChange={handleChange} placeholder="Minimum Experience" />
        <input type="text" name="companyName" value={filters.companyName} onChange={handleChange} placeholder="Company Name" />
        <input type="text" name="location" value={filters.location} onChange={handleChange} placeholder="Location" />
        <input type="text" name="remoteOnSite" value={filters.remoteOnSite} onChange={handleChange} placeholder="Remote/On-Site" />
        <input type="text" name="techStack" value={filters.techStack} onChange={handleChange} placeholder="Tech Stack" />
        <input type="text" name="role" value={filters.role} onChange={handleChange} placeholder="Role" />
        <input type="text" name="minBasePay" value={filters.minBasePay} onChange={handleChange} placeholder="Minimum Base Pay" />
        <button type="submit">Apply Filters</button>
      </form>
    </div>
  );
};

export default Filters;
