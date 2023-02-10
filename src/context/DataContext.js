import {createContext, useState, useEffect} from "react";
import {LetterGrid} from "../service/service";

const DataContext = createContext({});

const gridObj = Object.fromEntries(
  [10, 15, 20, 25, 30].map((e) => [e, new LetterGrid(e)])
);
const sizeKeys = Object.keys(gridObj);

export const DataProvider = ({children}) => {
  const [grid, setGrid] = useState([]);
  const [wordList, setWordList] = useState([]);
  const [gridSize, setGridSize] = useState(10);
  const [title, setTitle] = useState("");
  useEffect(() => {
    setGrid(gridObj[gridSize].getGrid());
    setWordList(gridObj[gridSize].getWordList());
    setTitle(gridObj[gridSize].getTitle());
  }, [gridSize]);

  const addToWordList = (list) => {
    try {
      list.forEach((word) => {
        if (!gridObj[gridSize].getWordList().includes(word)) {
          gridObj[gridSize].setCoordinate(word);
          setGrid(gridObj[gridSize].getGrid());
          setWordList(gridObj[gridSize].getWordList());
        }
      });
    } catch (e) {
      alert(`word capicity has been exceeded the grid capicity.`);
    }
  };

  const removeAll = () => {
    gridObj[gridSize].getWordList().forEach((word) => {
      removeFromWordList(word);
    });
  };

  const editTitle = (str) => {
    gridObj[gridSize].setTitle(str);
    setTitle(gridObj[gridSize].getTitle());
  };

  const removeFromWordList = (word) => {
    gridObj[gridSize].deleteCoordinate(word);
    setGrid(gridObj[gridSize].getGrid());
    setWordList(gridObj[gridSize].getWordList());
  };

  return (
    <DataContext.Provider
      value={{
        title,
        editTitle,
        removeAll,
        sizeKeys,
        removeFromWordList,
        grid,
        gridSize,
        setGridSize,
        wordList,
        addToWordList,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataContext;
