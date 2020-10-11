import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch,Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './homepage';
import ClosestPair from './Canvas';
import CollisionAvoider from './collisionavoider';
import Contact from './contact';
import Footer from './footer';
function App() {
  return (
    <div>
      <Switch>
        <Route exact path ="/">
            <Navbar/>
            <HomePage/>
            <br/>
            <Footer/>
        </Route>
        <Route exact path="/closestpair">
          <Navbar/>
          <br/>
          <br/>
          <ClosestPair/>
          <br/>
            <Footer/>
        </Route>
        <Route exact path="/collisionavoider">
          <Navbar/>
          <CollisionAvoider/>
        </Route>
        <Route exact path="/contact">
          <Navbar/>
          <br/>
          <br/>
            <Footer/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
