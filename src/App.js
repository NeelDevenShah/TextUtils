//original one
import React from "react";
import { useState } from 'react';
// import { Route, Router, Routes } from "react-router-dom";
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
function App() {
  const [mode, setMode]=useState("light");
  const[alert, setAlert]=useState(null);

  //Here the object of the setAlert is used to store the values
  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const toggleMode = ()=>{
    if(mode === "dark"){
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light Mode Has Been Unabled", "success");
      document.title="Text Utils-Light";
    }
    else{
      setMode("dark");
      document.body.style.backgroundColor="#1d2e61"
      showAlert("Dark Mode Has Been Unabled", "success");
      document.title="Text Utils-Dark";
    }
  }

  return (
      <div>
          {/* <Router> */}
          <Navbar title={"Util Text"} aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
          <Alert alert={alert}/>
          <div className="container my-4">
          {/* <About mode={mode}></About> */}
          <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>
        {/* 
              This is the react router code
              <Routes>
                <Router path="/about" element={<About mode={mode}/>}/>
                <Router path="/" element=<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>/>
                </Routes>
        */}
        </div>
        <Footer className="container my-50"/>
        {/* </Router> */}
      </div>
  );
}

export default App;