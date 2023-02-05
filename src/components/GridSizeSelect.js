import React from "react";
// import {setLicalStorage} from "../service/service";
// import {getLicalStorage} from "../service/service";

const GridSizeSelect = ({setGridSize, gridSize, sizeKeys}) => {
  const handleChange = (e) => {
    e.preventDefault();
    setGridSize(e.target.value);
  };
  return (
    <div>
      <label>Grid size:</label>
      <select name="grid-size" id="grid-size" onChange={handleChange}>
        {sizeKeys.map((e) => (
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
