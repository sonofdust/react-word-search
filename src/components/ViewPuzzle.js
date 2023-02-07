import React from "react";
import PuzzleGrid from "./PuzzleGrid";
import WordView from "./WordView";

const ViewPuzzle = ({grid, gridSize, wordList}) => {
  return (
    <>
      <div className="container">
        <section className="edit-container">
          <div className="grid-input">
            {/* <GridSizeSelect
              sizeKeys={sizeKeys}
              setGridSize={setGridSize}
              addToWordList={addToWordList}
              gridSize={gridSize}
            />
            <WordInput
              gridSize={gridSize}
              addToWordList={addToWordList}
              wordList={wordList}
            />*/}
            <WordView gridSize={gridSize} wordList={wordList} />
          </div>

          <PuzzleGrid grid={grid} />
        </section>
      </div>
    </>
  );
};

export default ViewPuzzle;
