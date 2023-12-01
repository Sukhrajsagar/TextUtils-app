import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import About from './Components/About';
import TextForm from './Components/TextForm';

// import { BrowserRouter, Route, Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#424949';
      showAlert("Dark mode has been enable", "success");
      document.title = 'Textutils - Dark Mode';
    } 
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success");
      document.title = 'Textutils - Light Mode';
    }
  }

  return (
    <>
    <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Enter the text to analyze " mode={mode} />
          </Route>
        </Switch>
        </div>
        </Router>
              {/* <About /> */}
    </>
  );
}

export default App;
