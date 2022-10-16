import React from "react";

export const Alert = (props) => {
  const Capitaliase = (word) => {
    var str = word;
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
    // return word + word;
  };
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>
          {" "}
          Alert here - {Capitaliase(props.alert.type)} - {props.alert.msg}
        </strong>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    )
  );
};
