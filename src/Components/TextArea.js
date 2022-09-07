import React, { useState } from "react";

export const TextArea = () => {
  const [text, setText] = useState("Entered text will be displayed here!!!!!");
  const [findtext, setFindText] = useState("");
  const [result, setResult] = useState("Result is here");
  // var result = "This is result ";
  const handleUpClick = () => {
    console.log("Upper case was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("Text area is changed ");
    setText(event.target.value);
  };

  const handleOnChangeFind = (event) => {
    console.log("Input area  is changed ");
    setFindText(event.target.value);
  };
  const handleFindText = () => {
    let f_text = findtext;
    let str = text.split(" ");
    console.log(str);
    let result1 = "";

    for (let v = 0; v < str.length; v++) {
      if (f_text === str[v]) {
        result1 = result1 + str[v];
      }
    }
    // setFindText(result);
    console.log(result1);
    setResult(result1);
  };
  const handleCopy = () => {
    var text = document.getElementById("my-box");
    console.log(text);
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  var demo = "Harsh";
  //   setText("new text is coming");
  return (
    <>
      <div className="input-group input-group-lg">
        <h1>Write your Text Below </h1>
        <div className="container my-3">
          <textarea
            type="text"
            rows="8"
            value={text}
            id="my-box"
            className="form-control "
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
            onChange={handleOnChange}
          ></textarea>
          <button className="btn btn-primary my-5" onClick={handleUpClick}>
            Convert
          </button>
          <button className="btn btn-primary mx-3" onClick={handleCopy}>
            Copy Text
          </button>
          <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>
            Remove Spaces
          </button>
        </div>
      </div>

      <div className="container my-3">
        <h4> Your Text summary </h4>
        <p>
          {text.split(" ").length} words {text.length} characters{" "}
        </p>
        <h3>Time required to read = {0.008 * text.split(" ").length}</h3>
        <h5>
          {" "}
          Preview <br /> {text}
        </h5>

        <input
          type="text"
          value={findtext}
          row="2"
          onChange={handleOnChangeFind}
        />
        <p> The result is - {result}</p>
        <button className="btn btn-danger my-3 mx-3" onClick={handleFindText}>
          Find Text
        </button>
      </div>
    </>
  );
};
