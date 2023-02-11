import React from "react";
import Grid from "./Grid";
import TitleInput from "./TitleInput";
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
        <div className="grid-container">
          <TitleInput />
          <Grid />
        </div>
      </section>
    </div>
  );
};

export default EditPuzzle;
