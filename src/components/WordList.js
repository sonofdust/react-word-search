import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const WordList = ({gridSize, wordList, deleteWord}) => {
  // const handleDelete = (idx) => {
  //   console.log(idx);
  //   setWordList(...wordList.filter((_, i) => i !== idx));
  // };
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
                onClick={() => deleteWord(i)}
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
