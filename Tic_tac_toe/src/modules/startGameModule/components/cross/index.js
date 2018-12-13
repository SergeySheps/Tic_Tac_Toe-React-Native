import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './styles';

class Cross extends Component {
  render() {
    const { xTranslate, yTranslate, color } = this.props;
    
    return (
      <View
        style={[
          styles.container,
          {
            transform: [
              { translateX: (xTranslate ? xTranslate : 10) + 35 },
              { translateY: (yTranslate ? yTranslate : 10) - 12 }
            ]
          }
        ]}>
        <View
          style={[
            styles.line,
            {
              transform: [{ rotate: '45deg' }],
              backgroundColor: color ? color : '#000'
            }
          ]}
        />
        <View
          style={[
            styles.line,
            {
              transform: [{ rotate: '135deg' }],
              backgroundColor: color ? color : '#000'
            }
          ]}
        />
      </View>
    );
  }
}

export default Cross;
