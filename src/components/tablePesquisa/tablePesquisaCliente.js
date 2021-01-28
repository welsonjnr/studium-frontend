import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

export default props => {

    const rows = props.pesquisaClient.map( clients => {
        return(
            <tr key={clients.id}>
               <td>{clients.id}</td>
               <td>{clients.nome}</td>
               <td>{clients.email}</td>
               <td>{clients.curso}</td> 
               <td>{clients.institution}</td>
               <td>{clients.period}</td>
               <td></td>
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
                    <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}