import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { DetailWrapper, Header, Content } from './style';
import { actionCreators } from './store';

const Detail = (props) => {
  const {getDetail, match: {params: {id}}} = props;
  useEffect(() => {
    getDetail(id);
  }, [getDetail, id]);
  
  return (
    <DetailWrapper>
      <Header>{props.title}</Header>
      <Content
        dangerouslySetInnerHTML={{__html: props.content}}
        />
    </DetailWrapper>
  );
};

const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
});

const mapDispatch = (dispatch) => ({
  getDetail(id) {
    dispatch(actionCreators.getDetail(id));
  }
});
const routerDetail = withRouter(Detail);

export default connect(mapState, mapDispatch)(routerDetail);