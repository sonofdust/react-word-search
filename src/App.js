import "./App.css";
import {Route, Routes, Link} from "react-router-dom";
import EditPuzzle from "./components/EditPuzzle";
import About from "./components/About";
import {useEffect, useState} from "react";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {LetterGrid} from "./service/service";
library.add(faTrash);

const gridObj = Object.fromEntries(
  [10, 15, 20, 25].map((e) => [e, new LetterGrid(e)])
);

function App() {
  const [grid, setGrid] = useState([]);
  const [wordList, setWordList] = useState([]);
  const [gridSize, setGridSize] = useState(10);

  useEffect(() => {
    setGrid(gridObj[gridSize].getGrid());

    setWordList(gridObj[gridSize].getWordList());
  }, [gridSize]);

  const addToWordList = (word) => {
    try {
      gridObj[gridSize].setCoordinate(word);
      setGrid(gridObj[gridSize].getGrid());
      setWordList([...wordList, word]);
    } catch (e) {
      alert(e.message);
    }
  };

  const updateGrid = (grid) => {
    setGrid(gridObj[gridSize].getGrid());
  };

  return (
    <>
      <nav>
        <div className="heading">
          <h4>Word Search</h4>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/" style={{fontSize: "20px"}}>
              Edit
            </Link>
          </li>
          <li>
            <Link to="/about" style={{fontSize: "20px"}}>
              About
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <EditPuzzle
              updateGrid={updateGrid}
              grid={grid}
              gridSize={gridSize}
              setGridSize={setGridSize}
              wordList={wordList}
              addToWordList={addToWordList}
            />
          }
        />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
