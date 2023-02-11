import React from "react";
import Grid from "./Grid";
import DataContext from "../context/DataContext";
import {useContext} from "react";

const PuzzleGridView = () => {
  const {title} = useContext(DataContext);

  return (
    <div className="grid-container">
      <h1>{title}</h1>
      <Grid />
    </div>
  );
};

export default PuzzleGridView;
