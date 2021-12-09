import React, { useState , useEffect, useRef} from "react";
import Play from '../imgs/play.png';
import Pause from '../imgs/pause.png';


function ClearTimer(TimerHndlRef) {
  clearInterval(TimerHndlRef.current);
  TimerHndlRef.current = null;
}

function Timer() {
  const TimerHndlRef = useRef();
  const [seconds, setSeconds] = useState(1800);

  const onClick = () => {
    // Check to see if timer is done
    if (TimerHndlRef.current) {
      ClearTimer(TimerHndlRef);
      return;
    }
    // If not done, then start timer
    TimerHndlRef.current = setInterval(() => 
      setSeconds((s) => {
        const v = s - 1;
        if (v > 0) return v;
        ClearTimer(TimerHndlRef);
        return 0;
      }),
      1000
    );
  };

  // When changed, setSeconds to whatever the value is on the range input
  const onChange = (e) => setSeconds(parseInt(e.target.value, 10));
  useEffect(() => {
    return () => {
      if (!TimerHndlRef.current) return;
      ClearTimer(TimerHndlRef);
    }
  }, []);

  const mLeft = Math.floor(seconds / 60);
  const sLeft = seconds - mLeft * 60;
  const mDisplay = mLeft < 10 ? `0${mLeft}` : mLeft;
  const sDisplay = sLeft < 10 ? `0${sLeft}` : sLeft;

  return (
    <>
      <div className="grey-box">
        <div className="number-box">
          <h2 className="timer-text">{mDisplay}:{sDisplay}</h2>
        </div>
        <div className="buttons-container">
        <input 
          className="input" 
          type="range"
          min="10"
          max="3600"
          value={seconds}
          onChange={onChange}
           />
          <button className="timer-button" onClick={onClick}>
            <img 
              className="play" 
              src={Play}
            />
          </button>
        </div>
      </div>
    </>
    );
  }

export default Timer;