import React, {useEffect} from 'react';
import List from './components/List';
import Writer from './components/Writer';
import Recommend from './components/Recommend';
import { 
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackupTop,
 } from './style';
import { connect } from 'react-redux';
import {actionCreators} from './store';

const handleScrollTop = () => {
  window.scrollTo(0, 0);
};
const bindEvents = (changeScrollTopShow) => {
  window.addEventListener('scroll', changeScrollTopShow);
};
const removeEvent = (changeScrollTopShow) => {
  window.removeEventListener('scroll', changeScrollTopShow);
};

const Home = (props) => {
  const {changeHomeData, changeScrollTopShow, showScrollTop} = props;

  useEffect(() => {
    changeHomeData();
    bindEvents(changeScrollTopShow);
    return () => {
      removeEvent(changeScrollTopShow);
    }
  }, [changeScrollTopShow, changeHomeData]);

  return (
    <HomeWrapper>
      <HomeLeft>
        <List />
      </HomeLeft>
      <HomeRight>
        <Recommend />
        <Writer />
      </HomeRight>
      {
        showScrollTop ? <BackupTop onClick={handleScrollTop}>回到顶部</BackupTop> : null
      }
    </HomeWrapper>
  );
};

const mapState = (state) => ({
  showScrollTop: state.getIn(['home', 'showScrollTop'])
})

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo();
    dispatch(action);
  },
  changeScrollTopShow() {
    if(document.documentElement.scrollTop > 200) {
      dispatch(actionCreators.toggleShowTop(true));
    } else {
      dispatch(actionCreators.toggleShowTop(false));
    }
  }
})

export default connect(mapState, mapDispatch)(Home);