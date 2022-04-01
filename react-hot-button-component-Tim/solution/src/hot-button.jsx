import React from 'react';

// establish a constructor to define state
// use react dev tools to debug/console log
// must use live server
// define css before writing functionality (markUp before behavior)
// write the basic logic and assign it to the classes
// while making changes, make sure command terminal is open as well as browser
// once markup is done, start writing behavior (handleClick)
// can test render method in console compotenent even without any functionality

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    };
    this.handleClick = this.handleClick.bind(this);
    // ES6 runs strict mode so binding it is important because without the bind, it will try to run window.handleClick...which is undefined
  }

  getTemperatureClass() {
    const { clicks } = this.state;
    if (clicks < 4) return 'cold';
    if (clicks < 7) return 'cool';
    if (clicks < 10) return 'tepid';
    if (clicks < 13) return 'warm';
    if (clicks < 16) return 'hot';
    return 'nuclear';
  }

  // handleClick is a prototype method on our class
  /*
    handleClick(event) {
      // console.log('hi'); to ensure that our method works and our code is being outputted in browser
      // always console.log any eventhandlers to make sure it runs

      const currentClicks = this.state.clicks // read current state
      const newClicks = currentClicks + 1 // compute new state
      this.setState({ clicks: newClicks}) // replace current state

      // event listener is to update, not calculate. There may be steps that deal with calculation inside,
         our listener but there should be no return.
    }
  */

  handleClick() {
    this.setState({
      clicks: this.state.clicks + 1
    });
  }

  // avoid repeated react elements
  render() {
    const temperatureClass = this.getTemperatureClass();
    return (
      <button
        onClick={this.handleClick}
        className={`hot-button ${temperatureClass}`}>
        { this.props.label }
      </button>
    );
  }
}

export default HotButton;
