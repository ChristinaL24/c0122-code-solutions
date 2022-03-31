import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    if (this.state.counter < 4) {
      return <button onClick={this.handleClick} className='hot-button cold'>Hot Button</button>;
    } else if (this.state.counter < 6) {
      return <button onClick={this.handleClick} className='hot-button cool'>Hot Button</button>;
    } else if (this.state.counter < 9) {
      return <button onClick={this.handleClick} className='hot-button tepid'>Hot Button</button>;
    } else if (this.state.counter < 12) {
      return <button onClick={this.handleClick} className='hot-button warm'>Hot Button</button>;
    } else if (this.state.counter < 15) {
      return <button onClick={this.handleClick} className='hot-button hot'>Hot Button</button>;
    } else {
      return <button onClick={this.handleClick} className='hot-button nuclear'>Hot Button</button>;
    }
  }
}
