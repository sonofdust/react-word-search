import React from "react";
import PuzzleGrid from "./PuzzleGrid";
import GridSizeSelect from "./GridSizeSelect";
import WordInput from "./WordInput";
import WordList from "./WordList";
import DataContext from "../context/DataContext";
import {useContext} from "react";

const EditPuzzle = () => {
  const {removeAll, wordList} = useContext(DataContext);
  return (
    <div className="container">
      <section className="edit-container">
        <div className="grid-input">
          <GridSizeSelect />
          <WordInput />
          {!!wordList.length ? (
            <button onClick={removeAll}>Delete All</button>
          ) : null}
          <WordList />
        </div>

        <PuzzleGrid />
      </section>
    </div>
  );
};

export default EditPuzzle;
