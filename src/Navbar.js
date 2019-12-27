
import React from 'react';

const Navbar = () => {
  return (
    <nav className="nav-wrapper blue accent-3">
      <div className="container">
        <a className="brand-logo">Zaio Challenges</a>
        <ul className="right">
          <li><a href="/zaiostuff/ReactIsFun">React is fun</a></li>
          <li><a href='/zaiostuff/AuthenticationUsingArrays'>Authentication using Arrays</a></li>
          <li><a href='/zaiostuff/DynamicSearchBar'>Dynamic search bar</a></li>
        </ul>
      </div>
    </nav> 
  )
}
export default Navbar