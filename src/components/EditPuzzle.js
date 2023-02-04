import React from "react";
import PuzzleGrid from "./PuzzleGrid";
import GridSizeSelect from "./GridSizeSelect";
import WordInput from "./WordInput";
import WordList from "./WordList";
const EditPuzzle = ({
  grid,
  updateGrid,
  setGridSize,
  gridSize,
  addToWordList,
  wordList,
}) => {
  //  console.log("MY LITTLE GRID.", gridObj[gridSize]);
  return (
    <div className="container">
      <section className="edit-container">
        <div className="grid-input">
          <GridSizeSelect
            setGridSize={setGridSize}
            addToWordList={addToWordList}
            gridSize={gridSize}
          />
          <WordInput
            gridSize={gridSize}
            addToWordList={addToWordList}
            updateGrid={updateGrid}
          />
          <WordList gridSize={gridSize} wordList={wordList} />
        </div>

        <PuzzleGrid grid={grid} />
      </section>
    </div>
  );
};

export default EditPuzzle;
