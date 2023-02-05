import React from "react";
import PuzzleGrid from "./PuzzleGrid";
import GridSizeSelect from "./GridSizeSelect";
import WordInput from "./WordInput";
import WordList from "./WordList";
const EditPuzzle = ({
  grid,
  sizeKeys,
  removeFromWordList,
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
            sizeKeys={sizeKeys}
            setGridSize={setGridSize}
            addToWordList={addToWordList}
            gridSize={gridSize}
          />
          <WordInput
            gridSize={gridSize}
            addToWordList={addToWordList}
            wordList={wordList}
          />
          <WordList
            gridSize={gridSize}
            wordList={wordList}
            removeFromWordList={removeFromWordList}
          />
        </div>

        <PuzzleGrid grid={grid} />
      </section>
    </div>
  );
};

export default EditPuzzle;
