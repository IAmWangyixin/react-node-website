import styled from 'styled-components';
import LogoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
  href: '/'
})`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  height: 56px;
  width: 100px;
  background: url(${LogoPic});
  background-size: contain;
`;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin-right: 70px;
  box-sizing: border-box;
  margin: 0 auto;
`;
export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  padding: 0 30px 0 20px;
  box-sizing: border-box;
  margin-top: 9px;
  margin-left: 20px;
  border: none;
  outline: none;
  border-radius: 19px;
  background-color: #eee;
  font-size: 14px;
  color: #666666;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px
  }
  &.slide-enter {
    transition: all .2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all .2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`;

export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 56px;
`;

export const Button = styled.div`
  float: right;
  line-height: 38px;
  border-radius: 19px;
  margin-top: 9px;
  padding: 0 20px;
  margin-right: 20px;
  border: 1px solid #ec6149;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    background-color: #ec6149;
    color: #ffffff;
  }
`
export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .iconfont {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    border-radius:  15px;
    /* background-color: gray; */
    &.focused {
      background-color: #777;
      color: #fff;
    }
  }
`
export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 58px;
  width: 240px;
  padding: 0 20px;
  border: 1px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
`
export const SearchInfoTitle = styled.div`
  color: #969696;
  font-size: 14px;
  margin-top: 20px;
  margin-bottom: 15px;
`

export const SearchInfoSwitch = styled.div`
  float: right;
  font-size: 13px;
`

export const SearchInfoItem = styled.div`
  display: block;
  float: left;
  line-height: 20px;
  padding: 0 5px;
  margin-right: 5px;
  margin-bottom: 15px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 2px;
`
export const SearchInfoList = styled.div`
  overflow: hidden;
`
