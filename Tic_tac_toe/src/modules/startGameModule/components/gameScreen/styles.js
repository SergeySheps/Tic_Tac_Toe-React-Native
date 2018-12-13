import { StyleSheet } from 'react-native';
import * as constants from '../../constants';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  gameLogText: {
    color: 'black',
    fontSize: 35,
    fontFamily: 'AvenirNext-DemiBold',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  endButton: {
    margin: 15,
    backgroundColor: '#841584',
    borderRadius: 7,
    padding: 10,
    fontSize: 28,
    color: 'white'
  },
  endButtonText: {
    fontSize: 28,
    color: 'white'
  }
});

export default styles;
