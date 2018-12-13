import { combineReducers } from 'redux';
import gameReducer from '../modules/startGameModule/reducer/gameReducer';

const rootReducer = combineReducers({
  gameReducer
});

export default rootReducer;
