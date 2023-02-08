import {useRef} from "react";

const WordInput = ({gridSize, editTitle}) => {
  const handleChange = (e) => {
    e.preventDefault();
    editTitle(e.target.value);
  };

  const word = useRef(null);
  return (
    <>
      {gridSize < 1 || (
        <input
          className="tooltip"
          type="text"
          placeholder="Enter puzzel title"
          onChange={handleChange}
        />
      )}
    </>
  );
};

export default WordInput;
