import React from 'react'
import { withRouter } from 'react-router-dom'
import './pesquisaClient.css'
import SelectMenu from '../../../components/selectmenu/selectMenu'
import TablePesquisaCliente from '../../../components/tablePesquisa/tablePesquisaCliente'

import PesquisaClientService from '../../../app/service/pesquisaClientService'
import {mensagemErro, mensagemSucesso} from '../../../components/toastr/toastr'

import 'bootstrap/dist/css/bootstrap.min.css';

class PesquisaClient extends React.Component {

    state = {
        nome:'',
        clientes : []
    }

    constructor(){
        super();
        this.service = new PesquisaClientService();
    }

    buscar = () => {
        const clienteFiltro = {
            nome: this.state.nome
        }

        this.service
            .pesquisarClientes(clienteFiltro)
            .then(resposta => {
                mensagemSucesso('Clientes carregados!')
                this.setState({ clientes: resposta.data  })
            }).catch( error => {
                mensagemErro('Não foi possível carregar os dados!')
            })

    }

    render() {

        const clients = [
            {id: '1', nome: 'ASDFGHJ', email:'sadfasd@gmail.com', curso:'Analista', institution:'UEG', period: 2}
        ]

        return (
        <div className="pt-5">
            <div className="card card-pesquisa">
                <div className="card-header">PESQUISA DE CLIENTES</div>
                <div className="row">
                    <div className="col-md-11">
                        <div className="bs-component">
                        <input type="text" className="form-control input-pesquisa"
                                value={this.state.nome} onChange={e => this.setState({nome: e.target.value})}
                                id="inputNameClient" placeholder="Nome do Usuário*"/>
                        </div>
                        <button onClick={this.buscar} type="button" className="btn btn-success btn-pesquisa"> Buscar</button>
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