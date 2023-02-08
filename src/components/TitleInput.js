import {useRef} from "react";

const TitleInput = ({gridSize, editTitle}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    editTitle(title.current.value);
    title.current.value = "";
  };

  const title = useRef(null);
  return (
    <>
      {gridSize < 1 || (
        <form onSubmit={handleSubmit}>
          <div>
            <input
              ref={title}
              type="text"
              placeholder="Enter title press Enter"
            />
          </div>
        </form>
      )}
    </>
  );
};

export default TitleInput;
