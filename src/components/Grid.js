import React from "react";
import DataContext from "../context/DataContext";
import {useContext} from "react";

const Grid = () => {
  const {grid} = useContext(DataContext);

  return (
    <>
      {grid.map((row, i) => (
        <div className="row" key={i}>
          {row.map((item, j) => (
            <div
              className={item.selected ? `column selected` : `column`}
              key={`${i}${j}`}
            >
              {item.char}
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default Grid;
