import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';  

function App() {
  const [darkMode, setDarkMode] = useState(false); // State variable which tells wherther dark mode is enabled or not
  return (
    <>
      <Navbar title="Verbify Hub" mode = {darkMode} />
      <div className="container my-3">
        <TextForm heading="Enter your text to analyze"/> 
        <About />
      </div>
    </>
  );
}

export default App;
