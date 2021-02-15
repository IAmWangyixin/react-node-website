import {
  fromJS
} from 'immutable';
import * as constants from './constants';

const defaultStatus = fromJS({
  login: false,
});

const reducer = (state = defaultStatus, action) => {
  switch (action.type) {
    case constants.CHANGE_LOGIN:
      return state.set('login', action.value);
    case constants.CHANGE_LOGOUT:
      return state.set('login', action.value);
    default:
      return state;
  }
};

export default reducer;
