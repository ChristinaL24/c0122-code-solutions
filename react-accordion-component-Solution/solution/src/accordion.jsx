import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openTopic: null
    };
  }

  setOpenTopic(topicIndex) {
    if (this.state.openTopic === topicIndex) {
      this.setState({ openTopic: null });
    } else {
      this.setState({ openTopic: topicIndex });
    }
  }

  render() {
    return (
      <div>
        {
          this.props.topics.map((topic, index) => {
            const handleClick = () => this.setOpenTopic(index);
            return (
              <div key={index} className="topic">
                <div onClick={handleClick} className="topic-title">
                  <h3>{ topic.title }</h3>
                </div>
                { index === this.state.openTopic &&
                  <div className="topic-content">
                    { topic.content }
                  </div>
                }
              </div>
            );
          })
        }
      </div>
    );
  }
}
