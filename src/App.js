import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch,Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './homepage';
import ClosestPair from './closestpair';
import CollisionAvoider from './collisionavoider';
import Contact from './contact';
function App() {
  return (
    <div>
      <Switch>
        <Route exact path ="/">
            <Navbar/>
            <HomePage/>
        </Route>
        <Route exact path="/closestpair">
          <Navbar/>
          <ClosestPair/>
        </Route>
        <Route exact path="/collisionavoider">
          <Navbar/>
          <CollisionAvoider/>
        </Route>
        <Route exact path="/contact">
          <Navbar/>
          <Contact/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
