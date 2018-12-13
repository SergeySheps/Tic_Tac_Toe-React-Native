import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './styles';

class Circle extends Component {
  render() {
    const { xTranslate, yTranslate, color } = this.props;
    return (
      <View
        style={[
          styles.container,
          {
            transform: [
              { translateX: xTranslate ? xTranslate : 10 },
              { translateY: yTranslate ? yTranslate : 10 }
            ],
            backgroundColor: color ? color : '#000'
          }
        ]}>
        <View style={styles.innerCircle} />
      </View>
    );
  }
}

export default Circle;
