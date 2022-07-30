import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
// import {Redirect} from 'react-router'
import Main from './views/Main';
import Detail from './views/Detail'; // Make sure names match
import Update from './views/Update';
import ExamForm from './components/ExamForm';
import './App.css'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/exams" replace />} /> {/* Change line */}
        <Route element={<Main />} path="/exams" /> {/* Change line */}
        <Route element={<ExamForm />} path="/exams/create" /> {/* Change line */}
        <Route element={<Detail />} path="/exams/:_id" /> {/* Change line */}
        <Route element={<Update />} path="/exams/:_id/edit" /> {/* Change line */}
      </Routes>
    </div>
  );
}
export default App;