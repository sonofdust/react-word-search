import React from "react";

const WordView = ({gridSize, wordList}) => {
  return (
    <div>
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
