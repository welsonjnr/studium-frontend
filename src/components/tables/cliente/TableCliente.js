import React from 'react'
import { faEdit, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import 'bootstrap/dist/css/bootstrap.min.css';
import './TableCliente.css'

export default props => {

    const rows = props.pesquisaClient.map( clients => {
        return(
            <tr key={clients.id}>
               <td>{clients.id}</td>
               <td>{clients.name}</td>
               <td>{clients.email}</td>
               <td>{clients.course}</td> 
               <td>{clients.institution}</td>
               <td>{clients.period}</td>
               <td>{clients.status}</td>
               <td>
                    <button type="button" className="btn btn-primary btn-tamanho-default btn-sm"
                    onClick={e => props.editAction(clients.id)}>
                    <FontAwesomeIcon className="fas fa-bars fa-2x"icon={faEdit}/></button>
                    <button type="button" className="btn btn-danger btn-acao btn-sm"
                    onClick={e => props.deleteAction(clients)}>
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
                    <th scope="col">Nome</th>
                    <th scope="col">Email</th>
                    <th scope="col">Curso</th>
                    <th scope="col">Instituição</th>
                    <th scope="col">Período</th>
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