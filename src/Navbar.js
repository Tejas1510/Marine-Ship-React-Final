import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle";

import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-dark navbar-expand-sm bg-primary  fixed-top">
        <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" >Marine Ship</a>
            <div className="collapse navbar-collapse" id="Navbar">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item mr-2"><NavLink className="nav-link active" to="/" > Home</NavLink></li>
                    <li className="nav-item mr-2"><NavLink className="nav-link" to="/closestpair" >Closest Pair</NavLink></li>
                    <li className="nav-item mr-2"><NavLink className="nav-link" to="/collisionavoider" > Collision Avoider </NavLink></li>
                    <li className="nav-item mr-2"><NavLink className="nav-link" to="/contact" > Contact </NavLink></li>
                    
                    
                </ul>
            </div>
           
        </div>
    </nav>
    </div>
  )
}

export default Navbar
