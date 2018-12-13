import { StyleSheet } from 'react-native';
import { figureSize } from '../../constants';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: figureSize.width,
    height: figureSize.height,
    borderRadius: 40
  },
  innerCircle: {
    backgroundColor: '#F5FCFF',
    width: 70,
    height: 70,
    borderRadius: 40
  }
});

export default styles;
