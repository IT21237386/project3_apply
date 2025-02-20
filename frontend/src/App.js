import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import ApplyPage from './pages/Applyus';
import AboutUs from './pages/Aboutus';

function App() {
  return (
      <Router>
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={< Home/>} />
          <Route path="/Apply" element={<ApplyPage/>} />
          <Route path="/About" element={<AboutUs/>} />
          

        </Routes>
      </Router>
  );
}

export default App;
