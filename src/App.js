import './App.css';
import React, {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';
import apiKey from './newsapi-apikey';

const App = () => {

  const [mode, setMode] = useState('light');
  const [progress, setProgress] = useState(0);

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }

  let pageSize = 5;

  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode}/>
        <LoadingBar color='#f11946' height={3} progress={progress} />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} key="general" pageSize={pageSize} apiKey={apiKey} category="general" mode={mode}/>}/>
          <Route path="/business" element={<News setProgress={setProgress} key="business" pageSize={pageSize} apiKey={apiKey} category="business" mode={mode}/>}/>
          <Route path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} apiKey={apiKey} category="entertainment" mode={mode}/>}/>
          <Route path="/health" element={<News setProgress={setProgress} key="health" pageSize={pageSize} apiKey={apiKey} category="health" mode={mode}/>}/>
          <Route path="/science" element={<News setProgress={setProgress} key="science" pageSize={pageSize} apiKey={apiKey} category="science" mode={mode}/>}/>
          <Route path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={pageSize} apiKey={apiKey} category="sports" mode={mode}/>}/>
          <Route path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={pageSize} apiKey={apiKey} category="technology" mode={mode}/>}/>
          <Route path="/about" element={<About setProgress={setProgress} mode={mode}/>}/> 
        </Routes> 
      </Router>
    </>      
  ) 
}

export default App;