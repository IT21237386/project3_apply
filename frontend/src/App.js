import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import ApplyPage from './pages/Applyus';
import DetailsButtonPage from './pages/detailsButtonPage';
import CareerPage from './pages/careerPage';

function App() {
  return (
      <Router>
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={< Home/>} />
          <Route path="/Apply" element={<ApplyPage/>} />
          <Route path="/details" element={<DetailsButtonPage />} />
          <Route path="/careers" element={<CareerPage />} />
          

        </Routes>
      </Router>
  );
}

export default App;
