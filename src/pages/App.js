import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Start from '../pages/start';
import RemoveBackground from '../pages/RemoveB';
import Changeformat from '../pages/ChangeF';
import CompressPage from './Compress';
import RemoveResult from '../pages/RemoveResu'; 

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/remove-background" element={<RemoveBackground />} />
            <Route path="/change-format" element={<Changeformat />} />
            <Route path="/compress" element={<CompressPage />} />
            <Route path="/remove-result" element={<RemoveResult />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
