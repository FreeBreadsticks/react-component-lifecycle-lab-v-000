import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  // TODO: componentWillMount()
  componentWillMount = () => {
    this.setState({
      tweets: this.props.newTweets,
    });
  }
  // TODO: shouldComponentUpdate()
  shouldComponentUpdate = (nextProps, nextState) => {
    if (nextProps.newTweets.length > 0) {
      return true;
    } else {
      return false;
    }
  }
  // TODO: componentWillReceiveProps()
  componentWillReceiveProps = (nextProps) => {
    var currentTweets = this.state.tweets
    nextProps.newTweets.map(tweet =>{
      currentTweets.unshift(tweet);
    });
    this.setState({
      tweets: currentTweets,
    })

  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
