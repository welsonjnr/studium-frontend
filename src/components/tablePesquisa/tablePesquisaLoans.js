import React from 'react'
import { faEdit, faTrashAlt, faArrowAltCircleDown, faUndo, faWindowClose} from "@fortawesome/free-solid-svg-icons";
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
               <td>{loans.loanReturnDay}</td>
               <td>{loans.status}</td>
               <td>
                    <button type="button" title="Devolver" 
                    className="btn btn-success btn-sm" disabled={loans.status == 'DEVOLVIDO' || loans.status == 'CANCELADO'}
                    onClick={e => props.returnAction(loans.id, loans.bookId, loans.clientId)}>
                    <FontAwesomeIcon className="fas fa-bars fa-2x"icon={faArrowAltCircleDown}/></button>
                    <button type="button" title="Renovar" 
                    className="btn btn-dark btn-sm" disabled={loans.status == 'DEVOLVIDO' || loans.status == 'CANCELADO' || loans.status == 'RENOVADO'}
                    onClick={e => props.renewAction(loans.id, loans.bookId, loans.clientId)}>
                    <FontAwesomeIcon className="fas fa-bars fa-2x"icon={faUndo}/></button>
                    <button type="button" title="Cancelar" className="btn btn-danger btn-sm" disabled={loans.status == 'RENOVADO' || loans.status == 'OK'}
                    onClick={e => props.deleteAction(loans)}>
                    <FontAwesomeIcon className="fas fa-bars fa-2x"icon={faWindowClose}/></button>
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