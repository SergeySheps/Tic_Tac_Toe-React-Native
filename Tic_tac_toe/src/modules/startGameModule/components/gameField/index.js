import React, { Component } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import Circle from '../circle';
import Cross from '../cross';
import { figurePoints, cellAreas } from '../../constants';
import styles from './styles';

class GameField extends Component {
  onTouchField = (e) => {
    const { changeTurn, field } = this.props;
    const { locationX, locationY } = e.nativeEvent;

    if (e.currentTarget !== e.target) {
      return;
    }

    cellAreas.map((cell, ind) => {
      if (
        locationX >= cell.startX &&
        locationX <= cell.endX &&
        (locationY >= cell.startY && locationY <= cell.endY)
      ) {
        if (field[ind] != null) {
          return;
        }
        changeTurn(ind);
      }
    });
  };

  render() {
    const { isCross, game, field } = this.props;

    return (
      <View style={styles.boardContainer}>
        <TouchableWithoutFeedback
          onPress={(e) => this.onTouchField(e)}
          disabled={
            game.message
              ? true
              : isCross
              ? game.playerTurn !== game.userCross
              : game.playerTurn !== game.userZero
          }>
          <View style={styles.board}>
            <View style={styles.verticalLine} />
            <View style={[styles.verticalLine, { transform: [{ translateX: 200 }] }]} />
            <View style={styles.horizontalLine} />
            <View style={[styles.horizontalLine, { transform: [{ translateY: 200 }] }]} />
            {figurePoints.map((point, ind) =>
              field[ind] == 1 ? (
                <Cross key={ind} yTranslate={point.y} xTranslate={point.x} />
              ) : (
                field[ind] == 0 && <Circle key={ind} yTranslate={point.y} xTranslate={point.x} />
              )
            )}
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    game: state.gameReducer
  };
};

export default connect(mapStateToProps)(GameField);
