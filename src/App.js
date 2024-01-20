import React from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Home from "./Components/Home";
import { NoteState } from "./contexts/notes/NoteState";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />}>
              </Route>
              <Route exact path="/about" element={<About />}>
              </Route>
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
