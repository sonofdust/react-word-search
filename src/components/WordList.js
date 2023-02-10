import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import DataContext from "../context/DataContext";
import {useContext} from "react";

const WordList = () => {
  const {removeFromWordList, gridSize, wordList} = useContext(DataContext);

  return (
    <div>
      {gridSize < 1 || (
        <ol>
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
        </ol>
      )}
    </div>
  );
};

export default WordList;
