import React from 'react';
import TextBox from './TextBox/TextBox'
import ArrayAuth from "./AuthUsingArrays/ArrayAuth"
import DynamicSearchBar from "./DynamicSearchBar/DynamicSearchBar"
import Navbar from "./Navbar"
import {BrowserRouter, Route} from "react-router-dom"
import Home from './Home'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Route exact path = "/zaiostuff/" component = {Home} />
        <Route path ="/zaiostuff/ReactIsFun" component={TextBox}/>
        <Route path ='/zaiostuff/AuthenticationUsingArrays' component={ArrayAuth}/>
        <Route path ='/zaiostuff/DynamicSearchBar' component={DynamicSearchBar}/>
      </div>    
      </BrowserRouter>
  );
}

export default App;
