import {
  fromJS
} from 'immutable';
import * as constants from './constants';

const defaultStatus = fromJS({
  title: '',
  content: '',
});

const reducer = (state = defaultStatus, action) => {
  switch (action.type) {
    case constants.CHANGE_DETAIL:
      return state.merge({
        title: action.title, 
        content: action.content,
      });
    default:
      return state;
  }
};

export default reducer;