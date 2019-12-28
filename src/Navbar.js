
import React from 'react';
import {HashRouter, Route,Link} from "react-router-dom"

const Navbar = () => {
  return (

    <nav className="container blue accent-3">
      <div className="nav-wrapper">
        <Link to="#!" className="brand-logo hide-on-med-and-down">Zaio Challenges</Link>
        <ul className="right">
          <li><Link to="/ReactIsFun">React is fun</Link></li>   {/*We use link tags instead of anchor tags because this prevents the default action of making a request to the server for the page and instead loads the component straight up  */}
          <li><Link to='/AuthenticationUsingArrays'>Authentication using Arrays</Link></li>
          <li><Link to='/DynamicSearchBar'>Dynamic search bar</Link></li>
        </ul>
        </div>
      
    </nav> 
  )
}
export default Navbar