import React,{Component} from "react";

class Header extends Component{
    render(){
        return(
                  <div className="container">
                    <div className="divider"></div>
                        <div className="section">
                            <h3>Dynamic Search Bar</h3>
                            <p>The text you enter will be displayed in the area below it. If you tick the spongify checkbox, each letter of your text will be capitalised at random.</p>
                        </div>         
                    </div>
        )
    }
}

export default Header