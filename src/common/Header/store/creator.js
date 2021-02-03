import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';
const changeList = (data) => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})

export const getSearchFocus = () => ({
  type: constants.SEARCH_FOCUS
});

export const getSearchBlur = () =>({
  type: constants.SEARCH_BLUR
});

export const getList= () => {
  return (dispatch) => {
    axios.get('/api/headerList.json')
      .then((res) => {
        const data = res.data;
        dispatch(changeList(data.data));
      })
      .catch((error) => {
        console.log('error')
      })
  }
}

export const getMouseEnter = () => {
  return {
    type: constants.MOUSE_ENTER
  }
}
export const getMouseLeave = () => {
  return {
    type: constants.MOUSE_LEAVE
  }
}

export const changePage = (page) => {
  return {
    type: constants.CHANGE_PAGE,
    page
  }
}