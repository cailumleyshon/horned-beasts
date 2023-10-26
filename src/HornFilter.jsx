import { useState } from 'react';

const HornFilter = ({ handleFilterChange }) => {
  const handleSelectChange = (e) => {
    handleFilterChange(e.target.value);
  };

  return (
    <form>
    <label htmlFor="filterByHorns">Filter by Number of Horns:</label>
    <select id="filterByHorns" onChange=  {handleSelectChange}>
        <option value="">All</option>
        <option value="1">1 Horn</option>
        <option value="2">2 Horns</option>
        <option value="3">3 Horns</option>
        <option value="100">100 Horns</option>
      </select>
    </form>
  );
};

export default HornFilter;
