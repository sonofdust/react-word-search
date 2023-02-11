import React from "react";
import DataContext from "../context/DataContext";
import {useContext} from "react";
import TitleInput from "./TitleInput";

const PuzzleGrid = () => {
  const {title, grid} = useContext(DataContext);

  return (
    <div className="grid-container">
      <TitleInput />
      <h1>{title}</h1>

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
    </div>
  );
};

export default PuzzleGrid;
