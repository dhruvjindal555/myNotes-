import React from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Home from "./Components/Home";
import { NoteState } from "./contexts/notes/NoteState";
import Alerts from "./Components/Alerts";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { useState } from "react";


function App() {
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alerts alert={alert}  />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home  showAlert={showAlert}/>}>
              </Route>
              <Route exact path="/about" element={<About />}>
              </Route>
              <Route exact path="/login" element={<Login showAlert={showAlert} />}>
              </Route>
              <Route exact path="/signup" element={<Signup showAlert={showAlert} />}>
              </Route>
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
