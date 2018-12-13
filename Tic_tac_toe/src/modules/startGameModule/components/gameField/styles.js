import { StyleSheet } from 'react-native';
// import * as constants from '../../constants';

const styles = StyleSheet.create({
  boardContainer: {
    margin: 20,
    justifyContent: 'center'
  },
  board: {
    borderWidth: 3,
    height: 312,
    width: 312
  },
  verticalLine: {
    backgroundColor: '#000',
    height: 306, //312-2*3
    width: 3,
    position: 'absolute',
    transform: [{ translateX: 100 }]
  },
  horizontalLine: {
    backgroundColor: '#000',
    height: 3, //312-2*3
    width: 306,
    position: 'absolute',
    transform: [{ translateY: 100 }]
  }
});

export default styles;
