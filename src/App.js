import "./App.css";
import React from "react";
import {Route, Routes} from "react-router-dom";
import EditPuzzle from "./components/EditPuzzle";
import About from "./components/About";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import ViewPuzzle from "./components/ViewPuzzle";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import {DataProvider} from "./context/DataContext";
library.add(faTrash);

function App() {
  return (
    <>
      <NavBar />
      <DataProvider>
        <Routes>
          <Route path="/" element={<EditPuzzle />} />
          <Route path="/View" element={<ViewPuzzle />} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<EditPuzzle />} />
        </Routes>
      </DataProvider>
      <Footer />
    </>
  );
}

export default App;
