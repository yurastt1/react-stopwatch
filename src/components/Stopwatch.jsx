import React from 'react';

class Stopwatch extends React.Component {
  state = {
    time: 0,
    isStarted: false,
    onWait: false,
  }

  tick = () => {
    this.setState(state => ({ time: state.time + 1 }));
  }

  toggle = () => {
    this.state.isStarted ? this.stop() : this.start();
    this.setState(state => ({
      isStarted: !state.isStarted,
    }));
  }

  start = () => {
    const { isStarted, onWait } = this.state;

    if (onWait === true) {
      this.setState(state => ({ onWait: !state.onWait }));
    } else if (!isStarted) {
      this.setState({ time: 0 });
    }

    this.myInterval = setInterval(this.tick, 1000);
  }

  stop = () => {
    this.setState({ isStarted: true });
    clearInterval(this.myInterval);
  }

  wait = () => {
    clearInterval(this.myInterval);
    this.setState(state => ({
      onWait: !state.onWait,
      isStarted: false,
    }));
  }

  reset = () => {
    clearInterval(this.myInterval);
    this.setState({
      isStarted: true,
      onWait: false,
      time: 0,
    });
    this.start();
  }

  render() {
    const { time, isStarted } = this.state;
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor(time % 3600 / 60);
    const seconds = Math.floor(time % 3600 % 60);

    return (
      <div className="stopwatch">
        <h1 className="stopwatch__watch">
          {hours < 10 ? `0${hours}` : hours}
          :
          {minutes < 10 ? `0${minutes}` : minutes}
          :
          {seconds < 10 ? `0${seconds}` : seconds}
        </h1>
        <div className="stopwatch__buttons">
          <button
            className="stopwatch__button"
            type="button"
            onClick={this.toggle}
          >
            {!isStarted ? 'Start' : 'Stop'}
          </button>
          <button
            className="stopwatch__button"
            type="button"
            onDoubleClick={this.wait}
          >
            Wait
          </button>
          <button
            className="stopwatch__button"
            type="button"
            onClick={this.reset}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
