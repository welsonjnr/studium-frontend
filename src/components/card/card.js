import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from 'react-dom';
import TextBox from '../textbox/textbox.js'

import './card.css';

class Card extends React.Component{

render(){
    return(
    <div className="container">
        <div className="row">
            <div className="card mb-0" style={ {width: '18rem'} }>
                <div className="card-body formCad">
                    <h5 className="card-title titulo">{this.props.title}</h5>
                    {this.props.children}       
                </div>
            </div>
        </div>
    </div>
        )
    }
}

export default Card;