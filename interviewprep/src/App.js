import React from 'react';
import './App.css';
import {Routes , Route} from 'react-router-dom'
import Todos from './components/Todos';
import Todo from './components/Todo';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Todos/>} path='/'/>
        <Route element={<Todo/>} path='/todo/:id'/>
      </Routes>
    </div>
  );
}

export default App;
