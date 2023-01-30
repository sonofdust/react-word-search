import "./App.css";
import {Route, Routes, Link} from "react-router-dom";
import EditPuzzle from "./components/EditPuzzle";
import About from "./components/About";
import {getGrid} from "./service/service";
import {getLetter} from "./service/service";
import {useEffect, useState} from "react";

import {ReactDOM} from "react";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
library.add(faTrash);

function App() {
  const [grid, setGrid] = useState([]);
  const [wordList, setWordList] = useState([]);
  const [gridSize, setGridSize] = useState(10);

  useEffect(() => {
    setGrid(getGrid(gridSize));
  }, [gridSize]);

  const deleteWord = (idx) => {
    setWordList([...wordList.filter((_, i) => i != idx)]);
  };

  return (
    <>
      <nav>
        <div className="heading">
          <h4>Word Search</h4>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/" style={{fontSize: "30px"}}>
              Edit
            </Link>
          </li>
          <li>
            <Link to="/about" style={{fontSize: "30px"}}>
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
              grid={grid}
              gridSize={gridSize}
              setGridSize={setGridSize}
              wordList={wordList}
              setWordList={setWordList}
              deleteWord={deleteWord}
            />
          }
        />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
