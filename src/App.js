// import logo from "./logo.svg";
import "./App.css";
import "./Components/Navbar";
import Navbar from "./Components/Navbar";
import { TextArea } from "./Components/TextArea";
import React, { useState } from "react";
// import ExpenseItem from "./Components/ExpenseItem";

function App() {
  const AppProp = "This is in App ";
  return (
    <div>
      <Navbar title={"Harsh"} AppVar={AppProp} />
      <TextArea />
    </div>
  );
}

export default App;
