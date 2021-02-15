import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Write = (props) => {
  const {hasLogin} = props;
  if(hasLogin) {
    return (
      <div>
        写文章
      </div>
    )
  } else {
    return <Redirect to='/login' />
  }
};

const mapState = (state) => ({
  hasLogin: state.getIn(['login', 'login'])
});

export default connect(mapState, null)(Write);