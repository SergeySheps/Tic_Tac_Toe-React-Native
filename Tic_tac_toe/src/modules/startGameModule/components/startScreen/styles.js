import { StyleSheet } from 'react-native';
import * as constants from '../../constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
    alignItems: 'center',
    paddingTop: constants.windowSize.height / 10
  },
  textContainer: {
    flexDirection: 'column',
    paddingTop: constants.windowSize.height / 10,
    paddingRight: constants.windowSize.width / 4
  },
  textStyles: {
    color: 'black',
    fontSize: 35,
    fontFamily: 'AvenirNext-DemiBold',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  inputText: {
    marginVertical: 20,
    textAlign: 'center',
    backgroundColor: 'white',
    width: constants.windowSize.width / 1.3,
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: 24,
    fontFamily: 'AvenirNext-DemiBold',
    paddingVertical: 5
  },
  startButton: {
    marginRight: 40,
    marginLeft: 40,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center'
  },
  submitText: {
    color: 'white',
    fontSize: 29,
    fontFamily: 'AvenirNext-DemiBold',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default styles;
