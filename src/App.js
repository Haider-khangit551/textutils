import './App.css';
import Alerts from './components/Alerts';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      showAlert(null);
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = 'gray';
      showAlert("Dark Mode Has Been Enable.", "success");
      document.title = 'TEXTUTILS-DARK MODE';
    } else {
      setMode('light');
      document.body.style.background = 'white';
      showAlert("Light Mode Has Been Enable.", "success");
      document.title = 'TEXTUTILS-LIGHT MODE';
    }
  }
  return (
    <>
      <NavBar title="TEXTUTILS" abouttext="About Textutils" mode={mode} toggleMode={toggleMode} />
      <Alerts alert={alert} />
      <div className="container my-4">
        <TextForm showAlert={showAlert} heading="Enter Your Text to Analyze Below." mode={mode} />
      </div>
    </>
  );
}

export default App;
