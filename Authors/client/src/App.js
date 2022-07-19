import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
// import {Redirect} from 'react-router'
import Main from './views/Main';
import Detail from './views/Detail'; // Make sure names match
import Update from './views/Update';
import AuthorForm from './views/AuthorForm';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/authors" replace />} /> {/* Change line */}
        <Route element={<Main />} path="/authors" /> {/* Change line */}
        <Route element={<AuthorForm />} path="/authors/create" /> {/* Change line */}
        <Route element={<Detail />} path="/authors/:_id" /> {/* Change line */}
        <Route element={<Update />} path="/authors/:_id/edit" /> {/* Change line */}
      </Routes>
    </div>
  );
}
export default App;