import React, { Component, useState, useEffect } from "react";




function Timer() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [displayMessage, setDisplayMessage] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);

      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } else {
          // display message / trigger sound
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000)
  }, [seconds])

  const timerMinutes = minutes < 10 ? `0${minutes}`: minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <>
      <div className="grey-box">
        <div className="number-box">
          <h2 className="timer-text">{timerMinutes}:{timerSeconds}</h2>
        </div>
        <div className="buttons-container">
          <button className="timer-button">
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