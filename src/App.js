// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Else with a dark mode is enabled or not

  const [alert, setAlert] = useState(' ');

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert('dark mode has been unabled', 'success');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('light mode has been unabled', 'success');
    }
  }

  return (
    <>
        <Navbar title='NavBar' aboutText='AboutUs' mode={mode} toggleMode={toggleMode}></Navbar>
        <Alert alert={alert}/>
        {/* <Router>
          <Switch>
        <Route exact path="/about"> */}
            {/* <About></About> */}
        {/* </Route>
        <Route exact path="/"> */}
            <div className="container">
              <TextForm showAlert={showAlert} heading='Enter your text here'></TextForm>
            </div>
        {/* </Route>
          </Switch>
        </Router> */}
    </>
  );
}
export default App;