import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/Header';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Home from './pages/home';
import Write from './pages/write';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Header />
          {/* 报错：render与component区别？ */}
          {/* <Route exact path='/' render={Home}></Route> */}
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/login' component={Login}></Route>
          <Route exact path='/detail/:id' component={Detail}></Route>
          <Route exact path='/write' component={Write}></Route>
          {/* <Route exact path='/detail' component={() => <Detail />}></Route> */}
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
