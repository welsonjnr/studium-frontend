import React from 'react'
import { faEdit, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import 'bootstrap/dist/css/bootstrap.min.css';
import './tablePesquisaCliente.css'

export default props => {

    const rows = props.pesquisarLivros.map( books => {
        return(
            <tr key={books.id}>
               <td>{books.id}</td>
               <td>{books.name}</td>
               <td>{books.author}</td>
               <td>{books.edition}</td> 
               <td>{books.bookStatus}</td>
               <td>{books.amount}</td>
               <td>{books.category.name}</td>
               <td>
                    <button type="button" className="btn btn-primary btn-sm"
                    onClick={e => props.editAction(books.id)}>
                    <FontAwesomeIcon className="fas fa-bars fa-2x"icon={faEdit}/></button>
                    <button type="button" className="btn btn-danger btn-acao btn-sm"
                    onClick={e => props.deleteAction(books)}>
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
                    <th scope="col">Autor</th>
                    <th scope="col">Edição</th>
                    <th scope="col">Status</th>
                    <th scope="col">Quantidade</th>
                    <th scope="col">Categoria</th>
                    <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}