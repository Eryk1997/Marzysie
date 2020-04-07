import React from 'react';
import Navbar from './components/Navbar';

import Home from './pages/Home/Home';
import Frame from './pages/Home/Frame';

function App() {
  return (
    <div className="bg-dark">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
