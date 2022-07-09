import './App.css';
import React, { useState } from 'react';
import BoxForm from './components/BoxForm';
import BoxDisplay from './components/BoxDisplay'
import classes from '../src/components/BoxDisplay.module.css'


function App() {
  const [boxes, setBoxes] = useState([]);

  const createBox = (e, color) => {
    e.preventDefault();
    setBoxes([...boxes, color])
    
  // setColor(color)
};
console.log(boxes)
// console.log(color)
  return (
    <div className='App'>
      <BoxForm  createBox={createBox} /* validateColor={validateColor} */ />
      <div className={classes.container}>
        {boxes.map((color,i) => {
          return (
            <BoxDisplay color={color} key={i}/>
          )
        })}
      </div>
    </div>
  );
}

export default App;
