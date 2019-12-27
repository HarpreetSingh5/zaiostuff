import React,{Component} from 'react';
import Form from "./Form"
import Header from "./Header"
import TextDisplay from "./TextDisplay"
import "./Dynamic.css"

class TextBox extends Component{
  
  state={
    text: ""
  }

  spongify = (text)=>{
    let array = text.split('');

    let newArray = array.map((letter)=>{
      if(Math.random()>0.5){
        return letter.toUpperCase();
      }else{
        return letter.toLowerCase();
      }
    });

    return newArray.join("");
  }
  
  handleChange = (event)=>{
    let button = document.getElementById("spongify");
    let searchBar = document.getElementById("icon_prefix2")
    if(button.checked){
      this.setState({
        text : this.spongify(searchBar.value) //the way object[key] would refer to object.key, having something in [eg] within set state is just us saying state.eg
    })
    }else{

    this.setState({
        text : searchBar.value //the way object[key] would refer to object.key, having something in [eg] within set state is just us saying state.eg
    })}
}

  render(){
    return (
      <div className="TextBox container">
        <Header/>
        <Form handleChange = {this.handleChange}/>
        <TextDisplay text = {this.state.text}/>
      </div>
    );
  }
}

export default TextBox;
