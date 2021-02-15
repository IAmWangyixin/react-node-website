import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Input, LoginBox, LoginWrapper } from './style';
import { actionCreators } from './store';

const Login = (props) => {
  const {login, hasLogin} = props;
  let account, password;
  if(hasLogin) {
    return <Redirect to='/' />
  } else {
    return (
      <LoginWrapper>
        <LoginBox>
          <Input placeholder='账号' ref={(input) => {account = input}}/>
          <Input placeholder='密码' type='password' ref={(input) => {password = input}}/>
          <Button onClick={() => login(account, password)}>登录</Button>
        </LoginBox>
      </LoginWrapper>
    )
  }
};

const mapState = (state) => ({
  hasLogin: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => ({
  login(accountElem, passwordElem) {
    dispatch(actionCreators.login(accountElem.value, passwordElem.value));
  }
});
const routerLogin = withRouter(Login);

export default connect(mapState, mapDispatch)(routerLogin);