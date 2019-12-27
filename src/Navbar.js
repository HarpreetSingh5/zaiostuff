
import React from 'react';

const Navbar = () => {
  return (
    <nav className="nav-wrapper blue accent-3">
      <div className="container">
        <a className="brand-logo">Zaio Challenges</a>
        <ul className="right">
          <li><a href="/ReactIsFun">React is fun</a></li>
          <li><a href='/AuthenticationUsingArrays'>Authentication using Arrays</a></li>
          <li><a href='/DynamicSearchBar'>Dynamic search bar</a></li>
        </ul>
      </div>
    </nav> 
  )
}
export default Navbar