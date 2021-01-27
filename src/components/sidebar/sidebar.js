import React from 'react'
import ReactDOM from 'react-dom'
import './sidebar.css'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import logo from '../../imgs/logomarca.jpg'



class Sidebar extends React.Component{

    render(){
        function alterarEstado(e){
                e.preventDefault();
                if(document.getElementById("menufloat").style.display === "none"){
                    document.getElementById("menufloat").style.display="block"
                }else{
                    document.getElementById("menufloat").style.display="none"
                }
                
        }
        return(
            <div id="main">
                <div id="logo">
                    <img src={logo} alt="Alguma coisa"/>
                </div>  
                <div id="menu" >
                    <button id="btn-menu" onClick={alterarEstado}><FontAwesomeIcon className="fas fa-bars fa-2x"icon={faBars}/></button>
                </div>
                <div id="menufloat">
                    <ul className="ul-sidebar">
                        <li className="li-sidebar">
                            <a className="nav-link" href="#/home">Home</a>
                        </li>
                        <li className="li-sidebar">Minha conta</li>
                        <li className="li-sidebar">Livro</li>
                        <li className="li-sidebar">Usuário</li>
                    </ul>
                </div>
            </div>
        )
    }
}


export default Sidebar;