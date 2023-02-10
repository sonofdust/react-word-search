import DataContext from "../context/DataContext";
import {useContext} from "react";

const TitleInput = () => {
  const {editTitle, gridSize} = useContext(DataContext);

  const handleChange = (e) => {
    e.preventDefault();
    editTitle(e.target.value);
  };

  return (
    <>
      {gridSize < 1 || (
        <div>
          <input
            type="text"
            placeholder="Enter title hit <tab>"
            onChange={handleChange}
          />
        </div>
      )}
    </>
  );
};

export default TitleInput;
