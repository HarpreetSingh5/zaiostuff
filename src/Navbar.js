
import React from 'react';
import {HashRouter, Route,Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="nav-wrapper blue accent-3">
      <div className="container">
        <a className="brand-logo">Zaio Challenges</a>
        <ul className="right">
          <li><Link to="/ReactIsFun">React is fun</Link></li>
          <li><Link to='/AuthenticationUsingArrays'>Authentication using Arrays</Link></li>
          <li><Link to='/DynamicSearchBar'>Dynamic search bar</Link></li>
        </ul>
      </div>
    </nav> 
  )
}
export default Navbar