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