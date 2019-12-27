import React,{Component} from "react";





const Results = (props)=>{
    const rows = props.locations.map(location=>{
        return(
            <li className="collection-item">{location}</li>
        )
            
    })
    return(
        <ul className="collection">{rows}</ul>
    )
}

class DynamicSearchBar extends Component{

    state = {
        locations: []
    }


    autocomplete = (e)=>{
        let array = [ "Durban,SA" , "Cape Town,SA" ,"PE,SA" , "Johannesburg,SA", "Pretoria,SA", "Delhi,India", "Gujarat,India", "Big Ben,UK" , "California,USA" , "London,UK" ]
        const regex = new RegExp(`^${e.target.value}`,"gi");
        let newArray = array.filter(location=>{
            return location.match(regex);
        });
        console.log(newArray);
        if(e.target.value ===" "||e.target.value === ""){
            this.setState({locations: []});
        }else{
            this.setState({locations : newArray});
        }
        console.log(this.state)

    }


    render(){
        return(
            <div className="container">
            <div className="section">
                <h5>Dynamic Search Bar</h5>
                <p>Our company has a few branches and the autocomplete shows them as you carry on typing</p>
            </div>
              <div className="row">
                    <div className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">textsms</i>
                            <input type="text" id="autocomplete-input" className="autocomplete" onChange={this.autocomplete}/>
                            <label htmlFor="autocomplete-input" className="trigger-enter-active">Autocomplete</label>
                        </div>
                        <Results locations = {this.state.locations}/>
                        
                    </div>
                    </div>
                </div>

                </div>
        )
    }
}

export default DynamicSearchBar