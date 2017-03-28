import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';

import AppContainer from './containers/AppContainer';
import Albums from './components/Albums';

ReactDOM.render(
  <div>
    <Router history={hashHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRedirect to="/Albums" />
        <Route path="/Albums" component={Albums} />
      </Route>
    </Router>
  </div>,
  document.getElementById('app')
);
