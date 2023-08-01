import React from 'react';

const SortBar = ({ handleSort }) => {
  const handleSortChange = (event) => {
    handleSort(event.target.value);
  };

  return (
    <div>
      <label htmlFor="sort">Sort by: </label>
      <select id="sort" onChange={handleSortChange}>
        <option value="health">Health</option>
        <option value="damage">Damage</option>
        <option value="armor">Armor</option>
      </select>
    </div>
  );
};

export default SortBar;
