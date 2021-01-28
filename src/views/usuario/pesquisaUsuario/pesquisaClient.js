import React from 'react'
import { withRouter } from 'react-router-dom'
import './pesquisaClient.css'
import SelectMenu from '../../../components/selectmenu/selectMenu'
import TablePesquisaCliente from '../../../components/tablePesquisa/tablePesquisaCliente'

import 'bootstrap/dist/css/bootstrap.min.css';

class PesquisaClient extends React.Component {

    render() {

        const lista = [
            { label: '', value: ''}
        ]

        const clients = [
            {id: '1', nome: 'ASDFGHJ', email:'sadfasd@gmail.com', curso:'Analista', institution:'UEG', period: 2}
        ]

        return (
        <div className="pt-5">
            <div className="card card-pesquisa">
                <div className="card-header">Clientes</div>
                <div className="row">
                    <div className="col-md-11">
                        <div className="bs-component">
                        <input type="text" className="form-control"
                                id="inputNameClient" placeholder="Nome do Usuário"/>
                        </div>
                        <button className="btn btn-success"> Buscar</button>
                    </div>
                </div>
                <div className="row pt-4">
                    <div className="col-md-12">
                        <div className="bs-component">
                            <TablePesquisaCliente pesquisaClient={clients}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default withRouter(PesquisaClient);