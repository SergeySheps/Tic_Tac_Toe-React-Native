import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';
import rootReducer from './src/reducers';
import AppNavigator from './AppNavigator';

const store = createStore(rootReducer, devToolsEnhancer({ realtime: true }));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
