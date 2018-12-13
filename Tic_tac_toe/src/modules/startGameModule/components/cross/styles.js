import { StyleSheet } from 'react-native';
import { figureSize } from '../../constants';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: figureSize.width,
    height: figureSize.height
  },
  line: {
    position: 'absolute',
    width: 8,
    height: 105
  }
});

export default styles;
