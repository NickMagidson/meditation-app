import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props)
  }




  render() {
    return (
			<div className="grey-box">

        <div className="number-box">
          <h2 className="timer-text">10:00</h2>
        </div>

        <div className="buttons-container">

        </div>

			</div>
    );
  }
}

export default Timer;