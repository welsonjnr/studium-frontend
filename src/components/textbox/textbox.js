import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from 'react-dom';

import './textbox.css';

class TextBox extends React.Component{
    render(){
        return(
            <div>
                <input type={this.props.type} className="form-control mb-2" id={this.props.id} placeholder={this.props.placeholder}></input>
            </div>
        )
    }
}

export default TextBox;