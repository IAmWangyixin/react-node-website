import React, {Component} from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { 
  actionCreators
 } from './store';
import { 
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchInfo,
  SearchInfoSwitch,
  SearchInfoTitle,
  SearchInfoItem,
  SearchInfoList,
  SearchWrapper
} from './style';

/* const getListArea = (show) => {
  if(show) {
    return (
      <SearchInfo>
        <SearchInfoTitle>
          热门搜索
          <SearchInfoSwitch>换一批</SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchInfoList>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
        </SearchInfoList>
      </SearchInfo>
    )
  } else {
    return null
  }
}

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
          ></NavSearch>
        </CSSTransition>
        <i className={props.focused ? 'iconfont focused' : 'iconfont' }>&#xe60b;</i>
        {getListArea(props.focused)}
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
) */

class Header extends Component {
  getListArea(show) {
    const {list} = this.props;
    if(show) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              list.map((item) => (
                <SearchInfoItem key={item}>{item}</SearchInfoItem>
              ))
            }
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
  render() {
    const {focused, handleInputBlur, handleInputFocus} = this.props;
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载</NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={focused ? 'focused' : '' }
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? 'iconfont focused' : 'iconfont' }>&#xe60b;</i>
            {this.getListArea(focused)}
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
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.getList());
      dispatch(actionCreators.getSearchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.getSearchBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
