import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './style';
import { IconFont } from './statics/iconfont/iconfont';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
    <IconFont />
  </React.StrictMode>,
  document.getElementById('root')
);
