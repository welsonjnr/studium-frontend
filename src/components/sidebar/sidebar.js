import React from 'react'
import ReactDOM from 'react-dom'
import './sidebar.css'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import logo from '../../imgs/logomarca.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/src/modal'

class Sidebar extends React.Component {

    render() {
        return (
            <div id="navegacao">
                <div id="logo"><img src={logo} alt="Alguma coisa"/> </div>
                <nav className="navbar navbar-light bg-light">
                    <a className="nav-item nav-link active border rounded" href="/#/home">Home<span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link active border rounded" href="/#/minha-conta">Minha conta<span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link active border rounded" href="/#/pesquisa-livro">Livro<span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link active border rounded" href="/#/pesquisa-cliente">Clientes<span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link active border rounded" href="/#/pesquisa-emprestimos">Empréstimos<span className="sr-only">(current)</span></a>
                </nav>
            </div>
        )
    }
}


export default Sidebar;