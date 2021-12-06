import React, { Component } from "react";

function Timer() {



  return (
    <>
        <div className="grey-box">

          <div className="number-box">
            <h2 className="timer-text">10:00</h2>
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