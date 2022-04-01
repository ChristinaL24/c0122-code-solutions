import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCounting: false,
      seconds: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
  }

  tick() {
    this.setState({ seconds: this.state.seconds + 1 });
  }

  handleClick() {
    if (this.state.isCounting === false) {
      this.timer = setInterval(() => this.tick(), 1000);
      this.setState({ isCounting: true });
    } else {
      clearInterval(this.timer);
      this.setState({ isCounting: false });
    }
  }

  reset() {
    if (!this.state.isCounting) {
      this.setState({ seconds: 0 });
    }
  }

  render() {
    if (this.state.isCounting === false) {
      return (
        <div onClick={this.reset} className='circle'>
          <span className='text'>{this.state.seconds}</span>
          <i onClick={this.handleClick} className='fa-solid fa-play'></i>
        </div>
      );
    } else {
      return (
        <div className='circle'>
          <span className='text'>{this.state.seconds}</span>
          <i onClick={this.handleClick} className='fa-solid fa-pause'></i>
        </div>
      );
    }
  }
}

export default Stopwatch;
