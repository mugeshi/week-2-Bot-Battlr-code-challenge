import React from "react";

export default function CustomSortBar({ onSortChange }) {
  const options = [
    { value: "", label: "Choose an Option" },
    { value: "health", label: "Sort by Health" },
    { value: "damage", label: "Sort by Damage" },
    { value: "armor", label: "Sort by Armor" },
  ];

  return (
    <div className="custom-sort-bar">
      <span>Order by:</span>
      <select onChange={(e) => onSortChange(e.target.value)}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
