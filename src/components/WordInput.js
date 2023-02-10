import {useRef} from "react";

const WordInput = ({gridSize, addToWordList, wordList}) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!!word.current.value.replace(/^\s+/g, "")) {
      const list = word.current.value
        .toUpperCase()
        .replace(/[^A-Z \s]/g, "")
        .replace(/\s+$/g, "")
        .replace(/^\s+/g, "")
        .replace(/\s+/g, "\n")
        .split(/\s+/g);
      addToWordList(list);
    }
    word.current.value = "";
  };

  const handleChange = (e) => {
    e.preventDefault();
    e.target.value = e.target.value.toUpperCase().replace(/[^A-Z \b]/g, "");
  };

  const word = useRef(null);
  return (
    <>
      {gridSize < 1 || (
        <form onSubmit={handleSubmit}>
          <div className="tooltip">
            <input
              className="tooltip"
              ref={word}
              type="text"
              placeholder="Enter word press Enter"
              onChange={handleChange}
            />

            <span className="tooltiptext">
              Enter a single word or multiple words separated by spaces. Hit
              Enter. To view, move the mouse cursor over the puzzle grid.
            </span>
          </div>
        </form>
      )}
    </>
  );
};

export default WordInput;
