import React,{Component} from 'react';

class Form extends Component{
    state = {first_name:null,
            last_name: null,
            age:null,
            email:null,
            password:null,
            confirm_password:null
        }

    checkPassword = (event)=>{
        event.preventDefault();
        if(this.state.password === this.state.confirm_password && this.state.password!==null){
            alert("Success");
            let array = [this.state.first_name,this.state.last_name,this.state.age,this.state.email,this.state.password,this.state.confirm_password];
            console.log(array);
        }else{
            alert("Passwords do not match")
        }

    }

    handleChange = (event)=>{
        this.setState({
            [event.target.id] : event.target.value 
        })
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <form className="col s12"  onSubmit={this.checkPassword}>
                        <div className="row">
                            <div className="input-field col s4">
                                <input id="first_name" type="text" className="validate"  onChange={this.handleChange} />
                                <label htmlFor="first_name" className="active">First Name</label>
                            </div>
                            <div className="input-field col s4">
                                <input id="last_name" type="text" className="validate" onChange={this.handleChange}/>
                                <label htmlFor="last_name" className="active">Last Name</label>
                            </div>
                            <div className="input-field col s4">
                                <input id="age" type="number" className="validate" onChange={this.handleChange}/>
                                <label htmlFor="age" className="active">Age</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                            <input id="email" type="email" className="validate" onChange={this.handleChange}/>
                            <label htmlFor="email" className="active">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="password" type="password" className="validate" onChange={this.handleChange}/>
                                <label htmlFor="password" className="active">Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="confirm_password" type="password" className="validate" onChange={this.handleChange}/>
                                <label htmlFor="confirm_password" className="active">Confirm Password</label>
                            </div>
                        </div>
                        <button className="btn waves-effect waves-light" onClick={this.checkPassword}>Submit</button>
                    </form>
                </div>
            </div>
        
        )
    }

}

export default Form