import React from 'react';

// logic will involve using boolean true or false to toggle the switch.
// if turnOn === true, toggle turns on
// toggle will start off as "off"

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { turnOn: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.turnOn === true) {
      this.setState({ turnOn: false });
    } else if (this.state.turnOn === false) {
      this.setState({ turnOn: true });
    }
  }

  render() {
    return (
     <button>
        <span className='button-circle'></span>
        <span className='button-oval-off'></span>
     </button>
    );
  }
}

export default ToggleSwitch;
