import React, { useState } from "react";

export const TextArea = (props) => {
  const [text, setText] = useState("");
  const [findtext, setFindText] = useState("");
  const [result, setResult] = useState("Result is here");
  // var result = "This is result ";
  const handleUpClick = () => {
    console.log("Upper case was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text Area is changed", "danger");
  };
  const handleOnChange = (event) => {
    console.log("Text area is changed ");
    setText(event.target.value);
    // props.showAlert("Text Area is changed", "danger");
  };

  const handleOnChangeFind = (event) => {
    console.log("Input area  is changed ");
    setFindText(event.target.value);
    props.showAlert("Text Area is changed", "danger");
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
    props.showAlert("Text Area is changed", "danger");
  };
  const handleCopy = () => {
    var text = document.getElementById("my-box");
    console.log(text);
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Area is copied!!!", "danger");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);

    setText(newText.join(" "));
    props.showAlert("Text Area is removed from extra spaces", "danger");
  };
  // var demo = "Harsh";
  //   setText("new text is coming");
  const CalculateWords = (str) => {
    var result = "";
    if (str.length > 0) {
      if (str[str.length - 1] !== " ") {
        result = str.split(" ").length + " words " + str.length + " characters";
        return result;
      }
      result =
        str.split(" ").length -
        1 +
        " words " +
        (str.length - 1) +
        " characters";
      return result;
    }
    result = "0 words 0 characters";
    return result;
  };
  return (
    <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
      <div
        className="input-group input-group-lg"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Write your Text Below </h1>
        <div
          className="container my-3"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <textarea
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
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
          {/* {text.length > 0 ? text[text.length - 1] !== " "? : 
          text.split(" ").length
            : 0}{" "}
          words {text.length} characters{" "} */}
          {/* {text.length>0 ?(text[text.length-1] !==" " ? {}:text.split(" ").length): 0} */}
          {CalculateWords(text)}
        </p>
        <h3>Time required to read = {0.008 * text.split(" ").length}</h3>
        <h5>
          {" "}
          Preview <br />{" "}
          {text.length > 0 ? text : "Enter some Text above to display "}
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

        {/* <div>
          <input type="color" />
        </div> */}
      </div>
    </div>
  );
};
