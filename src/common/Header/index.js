import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { 
  getSearchBlurType,
  getSearchFocusType
 } from './action/creator';
import { 
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper
} from './style';

const Header = (props) => (
  <HeaderWrapper>
    <Logo />
    <Nav>
      <NavItem className="left active">首页</NavItem>
      <NavItem className="left">下载</NavItem>
      <SearchWrapper>
        <CSSTransition
          in={props.focused}
          timeout={200}
          classNames="slide"
        >
          <NavSearch
            className={props.focused ? 'focused' : '' }
            onFocus={props.handleInputFocus}
            onBlur={props.handleInputBlur}
            />
            </CSSTransition>
          <i className={props.focused ? 'iconfont focused' : 'iconfont' }>&#xe60b;</i>
        </SearchWrapper>
      <NavItem className="right">登录</NavItem>
      <NavItem className="right">
        <i className="iconfont">&#xe636;</i>
      </NavItem>
    </Nav>
    <Addition>
      <Button className="writting">
        <i className="iconfont">&#xe615;</i>
        写文章
      </Button>
      <Button className="reg">注册</Button>
    </Addition>
  </HeaderWrapper>
)

const mapStateToProps = (state) => {
  return {
    focused: state.header.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      const action = getSearchFocusType;
      dispatch(action)
    },
    handleInputBlur() {
      const action = getSearchBlurType;
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
