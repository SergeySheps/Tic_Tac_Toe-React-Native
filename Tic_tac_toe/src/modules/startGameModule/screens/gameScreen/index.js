import React, { Component } from 'react';
import GameScreenComponent from '../../components/gameScreen';

class GameScreen extends Component {
  render() {
    return <GameScreenComponent {...this.props} />;
  }
}

export default GameScreen;
