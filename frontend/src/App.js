import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import ApplyPage from './pages/Applyus';

function App() {
  return (
      <Router>
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={< Home/>} />
          <Route path="/Apply" element={<ApplyPage/>} />
          

        </Routes>
      </Router>
  );
}

export default App;
