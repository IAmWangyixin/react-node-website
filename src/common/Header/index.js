import React, {Component} from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { 
  actionCreators
 } from './store';
import {
  actionCreators as loginActionCreators
} from '../../pages/login/store';
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
    const {focused, handleInputBlur, handleInputFocus, list, login, logout} = this.props;
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
          {
            login ? <NavItem onClick={logout} className="right link">退出</NavItem> :
            <Link to="/login"><NavItem className="right link">登录</NavItem></Link>
          }
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
        </Nav>
        <Addition>
          <Link to='/write'>
            <Button className="writting">
              <i className="iconfont">&#xe615;</i>
              写文章
            </Button>
          </Link>
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
    mouseIn: state.getIn(['header', 'mouseIn']),
    login: state.getIn(['login', 'login'])
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
    },
    logout() {
      dispatch(loginActionCreators.changeLogout());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
