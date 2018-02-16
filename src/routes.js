import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';

export default (
  <Switch>
    <Route path='/' exact component={ Home } />
    <Route path='/gallery/:name' component={ Gallery } />
    <Route path='/contact' component={ Contact } />
  </Switch>
)
