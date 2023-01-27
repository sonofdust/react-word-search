import React from "react";

const PuzzelGrid = ({grid}) => {
  return (
    <section className="edit-container">
      <form>
        <input type="text" placeholder="Enter Word" maxLength={15} />
      </form>
      <div>
        {grid.map((row, i) => (
          <div key={i}>
            {row.map((item, j) => (
              <div key={`${i}${j}`}>{item}</div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PuzzelGrid;
