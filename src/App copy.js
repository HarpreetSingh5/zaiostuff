import React from 'react';
import TextBox from './TextBox/TextBox'
import ArrayAuth from "./AuthUsingArrays/ArrayAuth"
import DynamicSearchBar from "./DynamicSearchBar/DynamicSearchBar"
import Navbar from "./Navbar"
import {HashRouter, Route} from "react-router-dom"
import Home from './Home'

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navbar/>
        <Route exact path = "/zaiostuff/" component = {Home} />
        <Route path ="/zaiostuff/ReactIsFun" component={TextBox}/>
        <Route path ='/zaiostuff/AuthenticationUsingArrays' component={ArrayAuth}/>
        <Route path ='/zaiostuff/DynamicSearchBar' component={DynamicSearchBar}/>
      </div>    
      </HashRouter>
  );
}

export default App;
