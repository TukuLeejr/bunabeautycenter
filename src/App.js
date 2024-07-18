import React from 'react';
import Navbar  from './components/Navbar';
import { Header } from './components/Header';
import Services from './components/Services';
import Prices from './components/Prices';
import About from './components/About';
import Contact from './components/Contact';
import Location from './components/Location';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Header/>
        <Services/> 
        <Prices />
        <About />
        <Contact />
        <Location />
    </div>
  );
}

export default App;
