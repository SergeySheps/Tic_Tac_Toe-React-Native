import { createStackNavigator, createAppContainer } from 'react-navigation';
import * as startGameConstants from './src/modules/startGameModule/constants';
import { StartScreen, GameScreen } from './src/modules/startGameModule';

console.disableYellowBox = true;

// XMLHttpRequest = GLOBAL.originalXMLHttpRequest ?
//     GLOBAL.originalXMLHttpRequest :
//     GLOBAL.XMLHttpRequest;

//   // fetch logger
// global._fetch = fetch;
// global.fetch = function (uri, options, ...args) {
//   console.log(uri)
//   return global._fetch(uri, options, ...args).then((response) => {
//     console.log('Fetch', { request: { uri, options, ...args }, response });
//     return response;
//   });
// };

export default createAppContainer(
  createStackNavigator(
    {
      [startGameConstants.startScreen]: StartScreen,
      [startGameConstants.gameScreen]: GameScreen
    },
    {
      initialRouteName: startGameConstants.startScreen,
      headerMode: 'none'
    }
  )
);
