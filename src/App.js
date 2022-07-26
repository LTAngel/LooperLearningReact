import React, { useEffect, useState } from "react";
import './App.css';
import './style.css';
import Header from './Header.js';
import './Header.css';
import MainContainer from './MainContainer.js';




function App() {

  const audio = new Audio();
  const [timerOn, changeTimerOn] = useState(0);
  const [audioLevel, changeAudioLevel] = useState(0);

  
  
  return (
    <>
      <body onload="start()" onunload="setOptions()">
        <Header color="orange_shadow" ></Header>

        <MainContainer changeTimerOn={changeTimerOn} changeAudioLevel={changeAudioLevel}></MainContainer>

      </body>
    </>
  );
}

export default App;
