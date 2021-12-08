import React, { Component, useState } from "react";


function Timer() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);

  
    let interval = setInterval(() => {
      clearInterval(interval);
      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } else {
          // trigger sound
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000)
  
  // Button to start timer
  function handleClick() {
    console.log('Clicked');
  }

  const timerMinutes = minutes < 10 ? `0${minutes}`: minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <>
      <div className="grey-box">
        <div className="number-box">
          <h2 className="timer-text">{timerMinutes}:{timerSeconds}</h2>
        </div>
        <input className="input" type="number" placeholder="Set Time" align="center" />
        <div className="buttons-container">
          <button className="timer-button" onClick={handleClick}>
            <img 
              className="play" 
              src="https://img.icons8.com/ios-glyphs/90/ffffff/play--v1.png" 
            />
          </button>
        </div>
      </div>
    </>
    );
  }

export default Timer;