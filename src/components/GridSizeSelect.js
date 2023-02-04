import React from "react";
// import {setLicalStorage} from "../service/service";
// import {getLicalStorage} from "../service/service";

const GridSizeSelect = ({setGridSize, gridSize, grid}) => {
  const handleChange = (e) => {
    e.preventDefault();
    setGridSize(gridSize, grid);
    setGridSize(e.target.value);
  };
  return (
    <div>
      <label>Grid size:</label>
      <select name="grid-size" id="grid-size" onChange={handleChange}>
        {[10, 15, 20, 25].map((e) => (
          <option key={e} value={e}>
            {e}
          </option>
        ))}
      </select>
      <label>{` X ${gridSize}`}</label>
    </div>
  );
};

export default GridSizeSelect;
