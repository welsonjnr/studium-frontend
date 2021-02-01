import React from 'react'
import { faEdit, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import 'bootstrap/dist/css/bootstrap.min.css';
import './tablePesquisaCliente.css'

export default props => {

    const rows = props.pesquisarEmprestimos.map( loans => {
        return(
            <tr key={loans.id}>
               <td>{loans.id}</td>
               <td>{loans.nameClient}</td>
               <td>{loans.nameBook}</td>
               <td>{loans.loanDay}</td> 
               <td>{loans.loanDay}</td>
               <td>{loans.status}</td>
               <td>
                    <button type="button" className="btn btn-primary btn-tamanho-default"
                    onClick={e => props.editAction(loans.id)}>
                    <FontAwesomeIcon className="fas fa-bars fa-2x"icon={faEdit}/></button>
                    <button type="button" className="btn btn-danger btn-acao"
                    onClick={e => props.deleteAction(loans)}>
                    <FontAwesomeIcon className="fas fa-bars fa-2x"icon={faTrashAlt}/></button>
               </td>
            </tr>
        )
    })

    return(
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Cliente</th>
                    <th scope="col">Livro</th>
                    <th scope="col">Dia de Empréstimo</th>
                    <th scope="col">Dia de Retorno</th>
                    <th scope="col">Status</th>
                    <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}