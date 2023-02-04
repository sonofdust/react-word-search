import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const WordList = ({gridSize, wordList}) => {
  const deleteWord = (word) => {
    // console.log("GRID", gridObj[gridSize]);
    // console.log(word);
  };
  return (
    <div>
      {gridSize < 1 || (
        <ul>
          {wordList.map((e, i) => (
            <li key={i}>
              <FontAwesomeIcon
                icon="fa-trash"
                size="sm"
                className="delete"
                onClick={() => deleteWord(e)}
              />
              <span>{e}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WordList;
