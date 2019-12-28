import React from 'react';
import TextBox from './TextBox/TextBox'
import ArrayAuth from "./AuthUsingArrays/ArrayAuth"
import DynamicSearchBar from "./DynamicSearchBar/DynamicSearchBar"
import Navbar from "./Navbar"
import {HashRouter, Route} from "react-router-dom"
import Home from './Home'

function App() {
  return (
    <HashRouter basename ="/">
      <div className="App">
        <Navbar/>
        <Route exact path = "/" component = {Home} />
        <Route path ="/ReactIsFun" component={TextBox}/>
        <Route path ='/AuthenticationUsingArrays' component={ArrayAuth}/>
        <Route path ='/DynamicSearchBar' component={DynamicSearchBar}/>
      </div>    
      </HashRouter>
  );
}

export default App;
