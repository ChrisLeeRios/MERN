import { useParams } from "react-router-dom";
import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import './App.css';

const TheInput = (props) => {
  const { input } = useParams();

  if (input.toLowerCase() === "home") {
    return (
      <h1>Welcome</h1>
    )
  } else if (isNaN(+ input) === false) {
    return (
      <h1>The number is: {input} </h1>
    )
  } else if (isNaN(+ input) === true) {
    return (
      <h1>The word is: {input} </h1>
    )
  }
}

const TheInputs = (props) => {
  const { input, color, bgcolor } = useParams();

  if (isNaN(+ input) === false) {
    return (
      <h1 style={{ color: color, backgroundColor: bgcolor }}>The number is: {input} </h1>
    )
  } else if (isNaN(+ input) === true) {
    return (
      <h1 style={{ color: color, backgroundColor: bgcolor }} >The word is: {input} </h1>
    )
  }
}

function App() {
  return (
    <div className="tac">
      <Routes>
        <Route path="/:input" element={<TheInput />} />
        <Route path="/:input/:color/:bgcolor" element={<TheInputs />} />
      </Routes>
    </div>
  );
}

export default App;
