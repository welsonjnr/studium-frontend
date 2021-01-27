import React from 'react'
import ReactDOM from 'react-dom'
import './sidebar.css'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import logo from '../../imgs/logomarca.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/src/modal'


class Sidebar extends React.Component{

    render(){
        function fecharModal(e, destino){
                e.preventDefault();
            }

        return(
            <div id="main">
                <div id="logo"> <img src={logo} alt="Alguma coisa"/> </div>  
                <button id="btn-menu" className="menu" type="button" data-toggle="modal" data-target="#modal-menu"><FontAwesomeIcon className="fas fa-bars fa-2x"icon={faBars}/></button>

                <div className="modal fade" id="modal-menu" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="menuFloat">
                                <div className="li-sidebar"><a className="nav-link" href="#/home" data-dimiss="modal">Home</a></div>
                                <div className="li-sidebar"><a className="nav-link" href="#/home" data-dimiss="modal">Minha Conta</a></div>
                                <div className="li-sidebar"><a className="nav-link" href="#/home" data-dimiss="modal">Livro</a></div>
                                <div className="li-sidebar"><a className="nav-link" href="#/home" data-dimiss="modal">Usuário</a></div>
                                <div className="li-sidebar"><a className="nav-link" href="#/home" data-dimiss="modal">Empréstimo</a></div>
                            </div>
                        </div>
                    </div>
                </div>

                   {/* <div id="menu" >
                    <button id="btn-menu" data-target=".modal-menu"><FontAwesomeIcon className="fas fa-bars fa-2x"icon={faBars}/></button>
                </div>
                <div id="modal fade modal-menu">
    
                    <ul className="ul-sidebar">
                        <li className="li-sidebar">  </li>
                        <li className="li-sidebar">Minha conta</li>
                        <li className="li-sidebar">Livro</li>
                        <li className="li-sidebar">Usuário</li>
                    </ul>
                </div>*/}
            </div>
        )
    }
}


export default Sidebar;