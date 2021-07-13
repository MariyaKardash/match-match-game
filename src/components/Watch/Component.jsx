import React from 'react'

export class Stopwatch extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        seconds: 1,
        time: new Date(0,0,0,0,0,0),
      }
      this.timerId = null
    }

    componentDidMount() {
      this.startTime();
    }
  
    componentWillUnmount() {
      clearInterval(this.timerId)
    }
  
    startTime = () => {
      this.timerId = setInterval(this.tick, 1000)
    }
  
    stopTime = () => {
      clearInterval(this.timerId)
      this.timerId = null
    }
  
    resetTime = () => {
      clearInterval(this.timerId)
      this.setState({
        seconds: 1, 
        time: new Date(0,0,0,0,0,0)
      })
      this.timerId = null
    }
  
    tick = () => {
      this.setState({
        seconds: this.state.seconds + 1,
        time: new Date(0,0,0,0,0,this.state.seconds)
      })
    }
  
    render() {
      return (
      <div className="container">
        <h1>{this.state.time.toLocaleTimeString()}</h1>
      </div>
      )}
  }