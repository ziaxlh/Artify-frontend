import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Start from '../pages/start';
import RemoveBackground from '../pages/RemoveB';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/remove-background" element={<RemoveBackground />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
