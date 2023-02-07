import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const WordList = ({gridSize, wordList, removeFromWordList}) => {
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
                onClick={() => removeFromWordList(e)}
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
