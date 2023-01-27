import "./App.css";
import {Route, Routes, Link} from "react-router-dom";
import PuzzelGrid from "./components/PuzzelGrid";
import About from "./components/About";
import {getGrid} from "./service/service";
import {getLetter} from "./service/service";
import {useEffect, useState} from "react";

function App() {
  const [grid, setGrid] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    setGrid(getGrid(20));
  }, []);
  return (
    <>
      <nav>
        <div className="heading">
          <h4>Word Search</h4>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/" style={{fontSize: "30px"}}>
              Puzzle
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
        <Route path="/" element={<PuzzelGrid grid={grid} />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
