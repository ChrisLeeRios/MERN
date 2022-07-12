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

// const Location = (props) => { 
//   const { kity } = useParams(); // matches our :city in our Routes

//   return (
//     <h1>Welcome to { kity }!</h1>
//   );
// }

// function App() {
//   return (
//     <div>
//       <p>
//         <Link to="/seattle">Seattle</Link>
//         |
//         <Link to="/chicago">Chicago</Link>
//         |
//         <Link to="/burbank">Burbank</Link>
//       </p>
//       <Routes>
//         <Route path="/:kity" element={<Location />} />
//       </Routes>
//     </div>
//   );
// }

export default App;
