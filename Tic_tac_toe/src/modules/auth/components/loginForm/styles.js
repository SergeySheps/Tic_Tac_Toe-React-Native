import { StyleSheet } from 'react-native';
import * as constants from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 70
  },
  title: {
    marginBottom: 15
  },
  buttonStyle: {
    backgroundColor: '#5a66d1',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    paddingVertical: 12,
    paddingHorizontal: 30
  },
  textStyle: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'AvenirNext-DemiBold',
    textAlign: 'center'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative'
  },
  backIcon: {
    paddingBottom: 10,
    position: 'absolute',
    left: -50
  }
});

export default styles;
