import { handleActions } from 'redux-actions';
import * as actionCreators from '../actions';

const defaultState = {
  gameId: null,
  playerTurn: null,
  userCross: null,
  userZero: null,
  field: null,
  winCombination: null,
  message: null,
  isCross: null,
  winCount: {
    userZero: 0,
    userCross: 0
  },
  isFinish: null
};

const gameReducer = handleActions(
  {
    [actionCreators.gameStoreUpdate](state, action) {
      return { ...state, ...action.payload };
    },
    [actionCreators.gameStoreClear](state, action) {
      return defaultState;
    },
    [actionCreators.gameFieldClear](state, action) {
      return { ...state, field: new Array(9).fill(null), message: null };
    }
  },
  defaultState
);

export default gameReducer;
