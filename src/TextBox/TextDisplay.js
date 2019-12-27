import React,{Component} from 'react';

class TextDisplay extends Component{


    render(){
        const {text} = this.props
        return(
            <div className="container">
              <div className="card cyan lighten-4">
                  <div className="card-content">
                  <h4 className="cyan-text text-darken-4">Your text is:</h4>
                  <p className="cyan-text text-darken-4">{text}</p>
                  </div>
            </div>
            </div>

        )
    }
}

export default TextDisplay