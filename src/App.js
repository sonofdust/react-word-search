import "./App.css";
import {Route, Routes, Link} from "react-router-dom";
import EditPuzzle from "./components/EditPuzzle";
import About from "./components/About";
import {useEffect, useState, useContext} from "react";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {LetterGrid} from "./service/service";
import ViewPuzzle from "./components/ViewPuzzle";
import Footer from "./components/Footer";
library.add(faTrash);

const gridObj = Object.fromEntries(
  [10, 15, 20, 25].map((e) => [e, new LetterGrid(e)])
);

function App() {
  const [grid, setGrid] = useState([]);
  const [wordList, setWordList] = useState([]);
  const [gridSize, setGridSize] = useState(10);
  const [title, setTutke] = useState("");

  useEffect(() => {
    setGrid(gridObj[gridSize].getGrid());

    setWordList(gridObj[gridSize].getWordList());
  }, [gridSize]);

  const addToWordList = (word) => {
    try {
      if (!gridObj[gridSize].getWordList().includes(word)) {
        gridObj[gridSize].setCoordinate(word);
        setGrid(gridObj[gridSize].getGrid());
        setWordList(gridObj[gridSize].getWordList());
      }
    } catch (e) {
      alert(`${word} has exceeded the grid capicity.`);
    }
  };

  const removeFromWordList = (word) => {
    gridObj[gridSize].deleteCoordinate(word);
    setGrid(gridObj[gridSize].getGrid());
    setWordList(gridObj[gridSize].getWordList());
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
            <Link to="/view" style={{fontSize: "20px"}}>
              View/Print
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
              sizeKeys={Object.keys(gridObj)}
              removeFromWordList={removeFromWordList}
              grid={grid}
              gridSize={gridSize}
              setGridSize={setGridSize}
              wordList={wordList}
              addToWordList={addToWordList}
            />
          }
        />
        <Route
          path="/View"
          element={
            <ViewPuzzle grid={grid} gridSize={gridSize} wordList={wordList} />
          }
        />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
