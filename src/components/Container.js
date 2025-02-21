import React, { useState, useEffect } from "react";
import logo from "../assets/Logo1.jpg"; // Import logo

const Container = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isEncoding, setIsEncoding] = useState(true);
  const [copyText, setCopyText] = useState("Copy");

  useEffect(() => {
    try {
      if (isEncoding) {
        setOutput(btoa(input));
      } else {
        setOutput(atob(input));
      }
    } catch (error) {
      setOutput("Invalid Input");
    }
  }, [input, isEncoding]);

  const handleModeChange = (newMode) => {
    setIsEncoding(newMode);
    setInput("");
    setOutput("");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopyText("Copied");

    setTimeout(() => {
      setCopyText("Copy");
    }, 2000);
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 p-3">
      <div className="container p-4 rounded shadow-lg responsive-container">
        <h2 className="text-center mb-3">Encode/Decode</h2>

        <div className="btn-group d-flex mb-3">
          <button
            className={`btn ${isEncoding ? "btn-dark" : "btn-outline-light"} w-50`}
            onClick={() => handleModeChange(true)}
          >
            Encode
          </button>
          <button
            className={`btn ${!isEncoding ? "btn-dark" : "btn-outline-light"} w-50`}
            onClick={() => handleModeChange(false)}
          >
            Decode
          </button>
        </div>

        <div className="mb-3">
          <label className="form-label">{isEncoding ? "Text" : "Encoded Text"}</label>
          <textarea
            className="form-control"
            placeholder="Paste here"
            rows="4"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">{isEncoding ? "Encoded Text" : "Text"}</label>
          <textarea className="form-control" rows="4" value={output} readOnly />
        </div>

        <button className="btn btn-outline-dark w-100" onClick={handleCopy}>
          {copyText}
        </button>
      </div>
    </div>
  );
};

export default Container;
