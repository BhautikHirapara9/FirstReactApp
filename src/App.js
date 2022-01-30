import React, { useState } from 'react'
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";

function App() {
  
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if(mode==='light')
    {
      setMode('dark')
      document.body.style.backgroundColor = '#716a6a'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>
    <Navbar title='Sparten' mode={mode} toggleMode={toggleMode}/>
    <Textform/>
    </>
  );
}

export default App;
