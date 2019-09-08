import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/main.scss';

import Navbar from './components/Navbar';
import Landing from './components/Landing';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Landing />
      </div>
    </Router>
  );
}

export default App;
