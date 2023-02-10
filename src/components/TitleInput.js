const TitleInput = ({gridSize, editTitle, title}) => {
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
            placeholder="Enter titler"
            onChange={handleChange}
          />
        </div>
      )}
    </>
  );
};

export default TitleInput;
