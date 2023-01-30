import React from "react";

const PuzzleGrid = ({grid}) => {
  return (
    <div className="grid-container">
      {grid.map((row, i) => (
        <div className="row" key={i}>
          {row.map((item, j) => (
            <div className="column" key={`${i}${j}`}>
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PuzzleGrid;
