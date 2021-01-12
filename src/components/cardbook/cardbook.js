import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from 'react-dom';
import TextBox from '../textbox/textbox.js'

import './cardbook.css';

class CardBook extends React.Component{

render(){
    return(
    <div className="container">
        <div className="row">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>       
                    <h6 class="card-subtitle mb-2">{this.props.children}</h6>
                </div>
            </div>
        </div>
    </div>
        )
    }
}

export default CardBook;