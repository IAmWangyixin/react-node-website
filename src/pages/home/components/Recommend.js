import React from 'react';
import { connect } from 'react-redux';
import {
  RecommendWrapper,
  RecommendItem,
} from '../style'

const Recommend = (props) => {
  const { list } = props; 
  return (
    <RecommendWrapper>
      {
        list.map((item) => (
          <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')} />
        ))
      }
    </RecommendWrapper>
  );
};

const mapState = (state) => ({
  list: state.getIn(['home', 'recommendList'])
});

export default connect(mapState, null)(Recommend);