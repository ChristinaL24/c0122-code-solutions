import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isClicked: !this.state.isClicked
    });
  }

  render() {
    return (
      <div
        onClick={this.handleClick}
        className='circle'>
          <span className='text'>0</span>
          <i className='fa-solid fa-play'></i>
      </div>
    );
  }
}

export default Stopwatch;

// use setInterval method and set a counter to increment whenever play is pressed
// ensure that when button is paused, setInterval is paused as well
