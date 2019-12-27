import React,{Component} from 'react' ; 

class Form extends Component{

    state = {
            
    }
    render(){

        return(
            <div className="container">
                <div className="row">
                    <form className="col s12" onChange={this.props.handleChange}>
                        <div className="row">
                            <div className="input-field col s6">
                            <i className="material-icons prefix">mode_edit</i>
                            <textarea id="icon_prefix2" className="materialize-textarea" autoFocus></textarea>
                            <label className="cyan-text text-darken-4" htmlFor="icon_prefix2">Random Text</label>
                            </div>
                        </div>
                            <label>
                                <input id="spongify" type="checkbox" />
                                <span className="cyan-text text-darken-4">Spongify</span>
                            </label>
                    </form>
                </div>
            </div>
        )
    }

}

export default Form