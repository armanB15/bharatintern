import React, { useState } from "react";
export default function About(probs) {
  const [mystyle, setstyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [text, settext] = useState("enable dark mode");
  const changestyle = () => {
    if (mystyle.color === "black") {
      setstyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white",
      });
      document.body.style.backgroundColor = "black";
      probs.alert("enabled dark mode", "success");
      settext("enable light mode");
    } else {
      setstyle({
        color: "black",
        backgroundColor: "white",
      });
      document.body.style.backgroundColor = "white";
      settext("enable dark mode");
      probs.alert("enabled light mode", "success");
    }
  };
  return (
    <div className="accordion pt-3 pb-3" id="accordionExample">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h1>About</h1>
            <p>
           Here can you can easily utilize the text.
            Text boxes are ideal for sidebars, captions, callouts, authorial asides, or any other kind of text you need to put on a page outside the regular text flow of your document.
            </p>
          </div>
        </div>
        <button className="btn btn-primary mt-2" onClick={changestyle}>
          {text}
        </button>
      </div>
    </div>
  );
}
