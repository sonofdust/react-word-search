import React from "react";
import PuzzleGrid from "./PuzzleGrid";
import WordView from "./WordView";

const ViewPuzzle = ({grid, gridSize, wordList, title}) => {
  return (
    <>
      <div className="container">
        <section className="edit-container">
          <div className="grid-input">
            <WordView gridSize={gridSize} wordList={wordList} />
          </div>
          <PuzzleGrid grid={grid} title={title} />
        </section>
      </div>
    </>
  );
};

export default ViewPuzzle;
