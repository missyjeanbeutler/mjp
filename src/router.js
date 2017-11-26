import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';


export default (
  <Switch>
    <Route path='/' exact component={ Home } />
    <Route path='/work' component={ Work } />
    <Route path='/contact' component={ Contact } />
  </Switch>
)
