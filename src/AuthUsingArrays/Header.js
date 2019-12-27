import React,{Component} from "react";

class Header extends Component{
    render(){
        return(
                  <div className="container">
                    <div className="divider"></div>
                        <div className="section">
                            <h3>Auth using Arrays</h3>
                            <p>Please enter your details below. Hitting submit gives you the array containing your details will be displayed in the console (provided the passwords match ofcourse).  </p>
                        </div>         
                    </div>
        )
    }
}

export default Header