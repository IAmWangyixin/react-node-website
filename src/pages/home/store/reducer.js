import {
  fromJS
} from 'immutable';
import * as constants from './constants';

const defaultStatus = fromJS({
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScrollTop: false
});

const changeHomeData = (state, action) => (state.merge({
  articleList: fromJS(action.articleList),
  recommendList: fromJS(action.recommendList)
}));

const addArticleList = (state, action) => (state.merge({
  articleList: state.get('articleList').concat(action.list),
  articlePage: action.nextPage,
}));

const reducer = (state = defaultStatus, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      // state.set('topList', action.articleList)//数据格式不对, 需用fromJS转换数据格式
      return changeHomeData(state, action);
    case constants.ADD_ARTICLE_LIST:
      return addArticleList(state, action);
    case constants.TOGGLE_SCROLL_TOP:
      return state.set('showScrollTop', action.show);
    default:
      return state;
  }
};

export default reducer;