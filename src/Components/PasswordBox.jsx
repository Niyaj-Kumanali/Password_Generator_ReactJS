import React from "react";



export default function PasswordBox(props) {
  return (
    <div className="generator__password">
      <h3>{props.password}</h3>
      <button className="copy__btn">
        <i onClick={props.handleCopyPassword} className="far fa-clipboard"></i>
      </button>
    </div>
  );
}


