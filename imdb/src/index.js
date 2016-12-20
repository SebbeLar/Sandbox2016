import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './App';
import UserList from './UserList';
import UserProfile from './UserProfile';
import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={UserList}/>
      <Route path="/user/:id" component={UserProfile}/>
    </Route>
  </Router>
  ), document.getElementById('root')
);
