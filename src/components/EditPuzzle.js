import React from "react";
import PuzzleGrid from "./PuzzleGrid";
import GridSizeSelect from "./GridSizeSelect";
import WordInput from "./WordInput";
import WordList from "./WordList";
const EditPuzzle = ({
  grid,
  setGridSize,
  gridSize,
  wordList,
  setWordList,
  deleteWord,
}) => {
  return (
    <section className="edit-container">
      <div className="grid-input">
        <GridSizeSelect
          setGridSize={setGridSize}
          setWordList={setWordList}
          gridSize={gridSize}
        />
        <WordInput
          gridSize={gridSize}
          setWordList={setWordList}
          wordList={wordList}
        />
        <WordList
          gridSize={gridSize}
          wordList={wordList}
          deleteWord={deleteWord}
        />
      </div>

      <PuzzleGrid grid={grid} />
    </section>
  );
};

export default EditPuzzle;
