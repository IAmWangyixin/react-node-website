import * as constants from './constants';
import {
  fromJS
} from 'immutable';

const defaultStatus = fromJS({
  focused: false,
  list: [], //immutable array
  page: 1,
  totalPage: 1
});

const reducer = (state = defaultStatus, action) => {
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      // immutable 的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象。
      return state.set('focused', true);
    case constants.SEARCH_BLUR:
      return state.set('focused', false);
    case constants.CHANGE_LIST:
      return state.set('list', action.data); // action.data is normally array
    default:
      return state;
  }
}

export default reducer;