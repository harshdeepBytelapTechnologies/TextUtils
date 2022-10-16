// import logo from "./logo.svg";
import "./App.css";
import "./Components/Navbar";
import Navbar from "./Components/Navbar";
import { TextArea } from "./Components/TextArea";
import React, { useState } from "react";
import { Alert } from "./Components/Alert";
import About from "./Components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";

// import ExpenseItem from "./Components/ExpenseItem";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const ShowAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const AppProp = "This is in App ";
  const checkToggle = () => {
    console.log("checkToggle is been calld");
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      ShowAlert("Dark Mode Enabled ", "success");
      document.title = "TextUtils- Dark Mode";
      setInterval(() => {
        document.title = "TextUtils is Amazing";
      }, 2000);

      setInterval(() => {
        document.title = "Install TextUtils Now";
      }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      ShowAlert("Light Mode Enabled", "warning");
      document.title = "TextUtils -Light Mode";
    }
  };

  const changeCustomColor = (event) => {
    var color_input = event.target.value;
    console.log(color_input);
    setMode(color_input);
    document.body.style.backgroundColor = color_input;
  };

  return (
    <Router>
      <div>
        <Navbar
          title={"Harsh"}
          AppVar={AppProp}
          mode={mode}
          ModeToggle={checkToggle}
          changeCustomColor={changeCustomColor}
        />
        <Alert alert={alert} />
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route
            path="/"
            element={<TextArea mode={mode} showAlert={ShowAlert} />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
