import React from "react";
import { FINISHED, RESTART } from "../../redux/constants";

export class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 1,
      time: new Date(0, 0, 0, 0, 0, 0),
    };
    this.timerId = null;
  }

  componentDidUpdate() {
    if (this.props.gameState.state === FINISHED) {
      this.stopTime();
      this.props.setTime(this.state.time.toLocaleString());
    }
    if (this.props.isRestart) {
      // console.log(this.isRestart)
      // console.log("RESTART");
      // this.stopTime();
      // this.resetTime();
      // this.startTime();
    }
  }

  componentDidMount() {
    this.startTime();
  }

  componentWillUnmount() {
    this.resetTime();
  }

  startTime = () => {
    this.timerId = setInterval(this.tick, 1000);
  };

  stopTime = () => {
    clearInterval(this.timerId);
    this.timerId = null;
  };

  resetTime = () => {
    clearInterval(this.timerId);
    this.setState({
      seconds: 1,
      time: new Date(0, 0, 0, 0, 0, 0),
    });
    this.timerId = null;
  };

  tick = () => {
    this.setState({
      seconds: this.state.seconds + 1,
      time: new Date(0, 0, 0, 0, 0, this.state.seconds),
    });
  };

  render() {
    return (
      <div className="container">
        <h1>{this.state.time.toLocaleTimeString()}</h1>
      </div>
    );
  }
}
