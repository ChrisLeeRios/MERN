import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
// import {Redirect} from 'react-router'
import Main from './views/Main';
import Detail from './views/Detail'; // Make sure names match
import Update from './views/Update';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/products" replace />} /> {/* Change line */}
        {/* <Navigate from="/" to="/products" noThrow="true" /> */}
        <Route element={<Main />} path="/products" /> {/* Change line */}
        <Route element={<Detail />} path="/products/:_id" /> {/* Change line */}
        <Route element={<Update />} path="/products/:_id/edit" /> {/* Change line */}
      </Routes>
    </div>
  );
}
export default App;