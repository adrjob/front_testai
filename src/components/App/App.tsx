import {useState} from 'react';
import ChatGPT from '../ChatGPT/ChatGPT';
import "./App.css";

import {
  Routes,
  Route
} from "react-router-dom";

import Header from '../Header';
// import Rout from "../../routes";
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';



const App = () => {

  return (        
<div className="App"> 
<Header />
        <Routes> 
            <Route path="/" element={<Home /> } /> 
            <Route path="/home" element={<Home /> } /> 
            <Route path="/about" element={<About/> } />             
            <Route path="/chatgpt" element={<ChatGPT/> } /> 
            <Route path="/contact" element={<Contact/> } /> 
       </Routes> 
    </div> 
  );
}

export default App;
