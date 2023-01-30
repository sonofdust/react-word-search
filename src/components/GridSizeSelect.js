import React from "react";

const GridSizeSelect = ({setGridSize}) => {
  const handleChange = (e) => {
    e.preventDefault();
    setGridSize(e.target.value);
  };
  return (
    <div>
      <label>Select grid size:</label>
      <select name="grid-size" id="grid-size" onChange={handleChange}>
        {[10, 15, 20, 25, 30].map((e) => (
          <option key={e} value={e}>
            {e}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GridSizeSelect;
