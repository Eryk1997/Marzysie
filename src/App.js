import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home/Home';
import Frame from './pages/Home/Frame';


function App() {
  return (
    <div className="bg-secondary ">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
