import React from "react";
import DataContext from "../context/DataContext";
import {useContext} from "react";

const WordView = () => {
  const {gridSize, wordList} = useContext(DataContext);
  return (
    <div className="view-list">
      {gridSize < 1 || (
        <ol>
          {wordList.map((e, i) => (
            <li key={i}>
              <span>{e}</span>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default WordView;
