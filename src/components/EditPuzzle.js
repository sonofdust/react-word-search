import React from "react";
import PuzzleGrid from "./PuzzleGrid";
import GridSizeSelect from "./GridSizeSelect";
import WordInput from "./WordInput";
import WordList from "./WordList";
import TitleInput from "./TitleInput";
const EditPuzzle = ({
  title,
  editTitle,
  removeAll,
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
          <TitleInput gridSize={gridSize} editTitle={editTitle} />
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
          {!!wordList.length ? (
            <button onClick={removeAll}>Delete All</button>
          ) : null}
          <WordList
            gridSize={gridSize}
            wordList={wordList}
            removeFromWordList={removeFromWordList}
          />
        </div>

        <PuzzleGrid grid={grid} title={title} />
      </section>
    </div>
  );
};

export default EditPuzzle;
