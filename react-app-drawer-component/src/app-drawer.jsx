import React from 'react';

class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      click: true
    });
  }

  getDisplay() {
    const { click } = this.state;
    if (click === true) {
      return 'drawer-component-on';
    } else {
      return 'drawer-component-off';
    }
  }

  getOverlay() {
    const { click } = this.state;
    if (click === true) {
      return 'background-img-overlay';
    } else {
      return 'background-img';
    }
  }

  render() {
    const display = this.getDisplay();
    const overlay = this.getOverlay();
    return (
      <>
       <div className={overlay}>
          <i onClick={this.handleClick} className='fa-solid fa-align-justify icon'></i>
        </div>
        <div className={display}>
          <h2>Choose a game!</h2>
          <p>Pokemon Saphire</p>
          <p>Pokemon Ruby</p>
          <p>Pokemon Crystal</p>
          <p>Pokemon X</p>
          <p>Pokemon Y</p>
        </div>
      </>
    );
  }
}

export default Drawer;
