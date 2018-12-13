import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SocketIOClient from 'socket.io-client';
import styles from './styles';
import * as actionCreators from '../../actions';
import Config from 'react-native-config'

import GameField from '../gameField';

class GameScreen extends Component {
  constructor(props) {
    super(props);
    console.log(Config,"12312313123")
    this.socket = SocketIOClient(Config.SERVER_URL);
  }

  componentDidMount() {
    const {
      actions: { gameStoreUpdate }
    } = this.props;

    this.socket
      .on('preStartGame', (game) => {
        gameStoreUpdate(game);
      })
      .on('gameStarted', (game) => {
        gameStoreUpdate({ ...game, gameId: game._id });
      })
      .on('playTurn', (game) => {
        gameStoreUpdate({ ...game, gameId: game._id });
      })
      .on('gamePartFinished', (game) => {
        gameStoreUpdate(game);
      })
      .on('gameFinished', (data) => {
        gameStoreUpdate(data);

        this.socket.disconnect();
      });

    this.socket.emit('startGame');
  }

  changeTurn = (fieldIndex) => {
    const data = {
      gameId: this.props.game.gameId,
      fieldIndex: fieldIndex
    };

    this.socket.emit('turnPlayed', data);
  };

  continueGameHandler = () => {
    const {
      actions: { gameFieldClear }
    } = this.props;

    gameFieldClear();
  };

  endGameHandler = () => {
    const {
      actions: { gameStoreClear }
    } = this.props;

    gameStoreClear();

    this.props.navigation.goBack();
  };

  render() {
    const { name } = this.props.navigation.state.params;
    const { game } = this.props;
    const { field, playerTurn, isCross, userZero, winCount } = this.props.game;

    return (
      <ScrollView contentContainerStyle={styles.container}>
        {userZero ? (
          <View style={styles.container}>
            <Text style={styles.gameLogText}>BO 3</Text>
            <Text style={[styles.gameLogText, { color: 'red' }]}>
              {`You ${isCross ? winCount.userCross : winCount.userZero} - ${
                isCross ? winCount.userZero : winCount.userCross
              } Opponent`}
            </Text>
            <Text style={styles.gameLogText}>
              {isCross ? 'You play for cross' : 'You play for zero'}
            </Text>
            <GameField
              field={field}
              playerTurn={playerTurn}
              isCross={isCross}
              changeTurn={(fieldIndex) => this.changeTurn(fieldIndex)}
            />
            {!game.isFinish && (
              <Text style={styles.gameLogText}>
                {game.playerTurn === game.userCross ? 'Cross turn' : 'Zero turn'}
              </Text>
            )}
            <Text style={styles.gameLogText}>{game.message && game.message}</Text>
            {game.message && !game.isFinish && (
              <TouchableOpacity style={styles.endButton} onPress={this.continueGameHandler}>
                <Text style={styles.endButtonText}>Continue game</Text>
              </TouchableOpacity>
            )}
            {game.isFinish && (
              <TouchableOpacity style={styles.endButton} onPress={this.endGameHandler}>
                <Text style={styles.endButtonText}>Back to start menu</Text>
              </TouchableOpacity>
            )}
          </View>
        ) : (
          <Text>{`${name ? name : 'User'}, waiting for an opponent...`}</Text>
        )}
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    game: state.gameReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameScreen);
