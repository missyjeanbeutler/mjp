import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import Love from './components/Love/Love';
import Pricing from './components/Pricing/Pricing';

export default (
  <Switch>
    <Route path='/' exact component={ Home } />
    <Route path='/gallery/:name' component={ Gallery } />
    <Route path='/contact' component={ Contact } />
    <Route path='/love' component={ Love }/>
    <Route path='/pricing' component={ Pricing }/>
  </Switch>
)
