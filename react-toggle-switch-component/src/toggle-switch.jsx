import React from 'react';

// logic will involve using boolean true or false to toggle the switch.
// if onClick === true, toggle turns on
// toggle will start off as "off"

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: true });
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
