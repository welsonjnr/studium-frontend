import React from 'react'
import ReactDOM from 'react-dom'
import './sidebar.css'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import logo from '../../imgs/logomarca.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/src/modal'

class Sidebar extends React.Component{

    state = {
        modal: ''
    }

    abrirHome = () => {
        setTimeout( () => {
            this.setState({modal: 'modal'})
        }, 1000)      
        this.setState({modal: ''})
    }

    render(){
        return(
            <div id="main">
                <div id="logo"> <img src={logo} alt="Alguma coisa"/> </div>  
                <button id="btn-menu" className="menu" type="button" data-toggle="modal" data-target="#modal-menu"><FontAwesomeIcon className="fas fa-bars fa-2x"icon={faBars}/></button>

                <div className="modal fade" id="modal-menu" tabindex="-1" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="menuFloat">
                                <div className="li-sidebar"> <a className="nav-link" href="#/home" onClick={this.abrirHome}>Home</a></div>
                                <div className="li-sidebar"><a className="nav-link" data-dismiss="modal">Minha Conta</a></div>
                                <div className="li-sidebar"><a className="nav-link" data-dismiss="modal">Livro</a></div>
                                <div className="li-sidebar"><a className="nav-link" data-dismiss="modal">Usuário</a></div>
                                <div className="li-sidebar"><a className="nav-link" data-dismiss="modal">Empréstimo</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Sidebar;