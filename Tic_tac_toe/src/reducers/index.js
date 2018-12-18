import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import gameReducer from '../modules/startGameModule/reducer/gameReducer';

const rootReducer = combineReducers({
  gameReducer,
  form: formReducer
});

export default rootReducer;
