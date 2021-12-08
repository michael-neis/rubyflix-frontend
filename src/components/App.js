import '../App.css';
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from './Login';
import Homepage from './Homepage';

function App() {

  const [loginBool, setLoginBool] = useState(false)


  const hanldeLoginSubmit = () => {
    setLoginBool(!loginBool)
  }

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={loginBool ? <Login hanldeLoginSubmit={hanldeLoginSubmit}/> : <Homepage />}/>
      </Routes>
    </div>
  );
}

export default App;
