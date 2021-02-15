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
import { Link } from 'react-router-dom';

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
  getListArea(focused) {
    const {list, page, totalPage, handleMouseEnter, handleMouseLeave, mouseIn, handleChangePage} = this.props;
    const newList = list.toJS();
    const pageList = [];
    if(newList.length) {
      for (let i = (page - 1) * 10; i < page*10; i++) {
        if(newList[i]) {
          pageList.push(
            <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
          );
        }
      }
    }
    if(focused || mouseIn) {
      return (
        <SearchInfo 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch 
              onClick={() => handleChangePage(page, totalPage, this.spin)}
              >
              <i ref={(icon) => this.spin = icon} className="iconfont spin">&#xe65a;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              pageList
            }
          </SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }
  render() {
    const {focused, handleInputBlur, handleInputFocus, list} = this.props;
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo />
        </Link>
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
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? 'iconfont focused zoom' : 'iconfont zoom' }>&#xe60b;</i>
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
    );
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn'])
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      (list.size === 0) && dispatch(actionCreators.getList());
      dispatch(actionCreators.getSearchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.getSearchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.getMouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.getMouseLeave());
    },
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      if(originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = `rotate(${originAngle + 360}deg)`;
      if(page < totalPage) {
        dispatch(actionCreators.changePage(page + 1))
      } else {
        dispatch(actionCreators.changePage(1))
      }
      // dispatch(actionCreators.changePage());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
