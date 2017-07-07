import React from 'react'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'

import Main from '../pages/Main'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Portfolio from '../pages/Portfolio'

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home}/>
      <Route path="home" component={Home}/>
      <Route path="contact" component={Contact}/>
      <Route path="portfolio" component={Portfolio}/>
    </Route>
  </Router>
);
