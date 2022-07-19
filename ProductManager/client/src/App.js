import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Detail from './views/Detail'; // Make sure names match
import Update from './views/Update';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main />} path="/products" /> {/* Change line */}
        <Route element={<Detail />} path="/products/:_id" /> {/* Change line */}
        <Route element={<Update/>} path="/products/:_id/edit"/> {/* Change line */}
      </Routes>
    </div>
  );
}
export default App;