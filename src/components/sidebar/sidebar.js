import React from 'react'
import ReactDOM from 'react-dom'
import './sidebar.css'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import logo from '../../imgs/logomarca.jpg'



class Sidebar extends React.Component{

    render(){
        function abrirModal(e){
                e.preventDefault();
                document.getElementById("menufloat").style.display="block"
        }
        return(
            <div id="main">
                <div id="logo">
                    <img src={logo} alt="Alguma coisa"/>
                </div>  
                <div id="menu" >
                    <button id="btn-menu" onClick={abrirModal}><FontAwesomeIcon className="fas fa-bars fa-2x"icon={faBars}/></button>
                </div>
                <div className="modal fade" id="menufloat">
                    <ul>
                        <li>Home</li>
                        <li>Minha conta</li>
                        <li>Cadastrar Livro</li>
                        <li>Cadastrar Usuário</li>
                    </ul>
                </div>
            </div>
        )
    }
}


export default Sidebar;