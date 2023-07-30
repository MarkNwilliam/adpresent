import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AdPage from './pages/AdPage';
import Presentation from './pages/Presentation';
import Create from './pages/Create';
import React from 'react';

function App() {
  return (
    <div className="App">
     <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ad" element={<AdPage />} />
        <Route path="/create" element={<Create />} />
        <Route path="/presentation" element={<Presentation />} />
   
      </Routes>
    </div>
    </div>
  );
}

export default App;