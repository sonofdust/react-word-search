import React from "react";
import Grid from "./Grid";
import WordView from "./WordView";
import DataContext from "../context/DataContext";
import {useContext} from "react";

const ViewPuzzle = () => {
  const {wordList, title} = useContext(DataContext);
  return (
    <div className="container">
      <section className="edit-container">
        <div className="grid-input">
          <WordView />
        </div>
        <div className="grid-container">
          <h1>{title}</h1>
          <Grid />
        </div>
      </section>
    </div>
  );
};

export default ViewPuzzle;
