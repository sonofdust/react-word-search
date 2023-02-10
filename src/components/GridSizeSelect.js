import React from "react";
import DataContext from "../context/DataContext";
import {useContext} from "react";

const GridSizeSelect = () => {
  const {sizeKeys, setGridSize, gridSize} = useContext(DataContext);

  const handleChange = (e) => {
    e.preventDefault();
    setGridSize(e.target.value);
  };
  return (
    <div>
      <label>Grid size: </label>
      <select
        name="grid-size"
        id="grid-size"
        onChange={handleChange}
        value={gridSize}
      >
        {sizeKeys.map((e) => (
          <option key={e} value={e}>{`${e} X ${e}`}</option>
        ))}
      </select>
    </div>
  );
};

export default GridSizeSelect;
