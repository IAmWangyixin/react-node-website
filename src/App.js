import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/Header';
import Detail from './pages/detail';
import Home from './pages/home';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Header />
          {/* 报错：render与component区别？ */}
          {/* <Route exact path='/' render={Home}></Route> */}
          <Route exact path='/' component={() => <Home />}></Route>
          <Route path='/detail' render={Detail}></Route>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
