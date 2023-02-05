import {useRef} from "react";

const WordInput = ({gridSize, addToWordList, wordList}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!!wordList.length && wordList.includes(word.current.value))
    addToWordList(word.current.value);
    word.current.value = "";
  };

  const handleChange = (e) => {
    e.preventDefault();
    e.target.value = e.target.value.toUpperCase().replace(/[^A-Z]/g, "");
  };

  const word = useRef(null);
  return (
    <>
      {gridSize < 1 || (
        <form onSubmit={handleSubmit}>
          <input
            ref={word}
            type="text"
            placeholder="Enter word press Enter"
            maxLength={15}
            onChange={handleChange}
          />
        </form>
      )}
    </>
  );
};

export default WordInput;
