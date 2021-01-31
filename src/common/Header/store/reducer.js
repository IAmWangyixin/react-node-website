import { 
  SEARCH_FOCUS,
  SEARCH_BLUR
 } from '../action/type';

const defaultStatus = {
  focused: false
};

const reducer = (state = defaultStatus, action) => {
  if (action.type === SEARCH_FOCUS) {
    return {
      focused: true
    }
  }
  if (action.type === SEARCH_BLUR) {
    return {
      focused: false
    }
  }
  return state;
}

export default reducer;