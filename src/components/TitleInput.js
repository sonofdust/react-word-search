import DataContext from "../context/DataContext";
import {useContext} from "react";

const TitleInput = () => {
  const {editTitle, gridSize, title} = useContext(DataContext);

  const handleChange = (e) => {
    e.preventDefault();
    editTitle(e.target.value);
  };

  return (
    <>
      {gridSize < 1 || (
        <input
          value={title}
          size={35}
          id="title-text"
          type="text"
          placeholder="Enter title"
          onChange={handleChange}
        />
      )}
    </>
  );
};

export default TitleInput;
