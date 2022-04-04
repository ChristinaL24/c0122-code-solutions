import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      click: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (this.state.click === event.target.getAttribute('keyId')) {
      this.setState({ click: null });
    } else {
      this.setState({ click: event.target.getAttribute('keyId') });
    }
  }

  render() {
    const topics = this.props.topics;
    const renderAccordion = topics.map(topic =>
        <li key={topic.name} className='list-text'>
          <h2 className='name' keyId={topic.name} onClick={this.handleClick}>{topic.name}</h2>
          <p className={this.state.click === topic.name ? 'bio-on' : 'hidden' }>{topic.bio}</p>
        </li>
    );
    return (
      <div className='container'>
        <ul className='list-style'>
          {renderAccordion}
        </ul>
      </div>
    );
  }
}

export default Accordion;
