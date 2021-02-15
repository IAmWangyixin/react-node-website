import React from 'react';
import { 
  ListItem,
  ListInfo,
  LoadMore,
} from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

const List = (props) => {
  const {list, getMoreList, page} = props;
  return (
    <div>
      {
        list.map((item, index) => {
          const hasImgUrl = item.get('imgUrl') !== '';
          return (
            <Link key={index} to={`/detail/${item.get('id')}`}>
              <ListItem>
                {
                  hasImgUrl ? <img alt='' className="pic" src={item.get('imgUrl')}/> : '' 
                }
                <ListInfo className={hasImgUrl ? '' : 'noneImg'}>
                  <h3 className="title">{item.get('title')}</h3>
                  <p className="desc">{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            </Link>
          )
        })
      }
      <LoadMore onClick={() => getMoreList(page)}>更多文字</LoadMore>
    </div>
  );
};

const mapState = (state) => ({
  list: state.getIn(['home', 'articleList']), 
  page: state.getIn(['home', 'articlePage']),
}); 

const mapDispatch = (dispatch) => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page));
  }
})

export default connect(mapState, mapDispatch)(List);