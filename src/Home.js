import React,{Component} from "react";

class Home extends Component{

    
    render(){
        const props = this.props;
        console.log(props) //the router is passing some info as props already like location and shit. 
        return(
                  <div className="container">
                    <div className="divider"></div>
                        <div className="section">
                            <h3>Tasks I did done</h3>
                            <p>The Navbar will redirect you to a few of the simple challenges I completed on the Zaio platform  </p>
                        </div>         
                    </div>
        )
    }
}

export default Home