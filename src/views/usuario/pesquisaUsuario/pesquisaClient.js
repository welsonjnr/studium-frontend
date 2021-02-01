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
                console.log(this.state.clientes)
            }).catch( error => {
                mensagemErro('Não foi possível carregar os dados!')
            })
    }

    editar = (id) => {
        
    } 

    deletar = (cliente) => {
        this.service
        .deletar(cliente.id)
        .then(response => {
            const clientes = this.state.clientes;
            const index = clientes.indexOf(cliente)
            clientes.splice(index, 1)
            this.setState(clientes)

            mensagemSucesso('Cliente excluido com sucesso!')
        }).catch(error => {
            if(error = 500){
                mensagemErro('Não é possível excluir, ainda há empréstimos no nome do cliente')
            }else{
            mensagemErro('Não foi possível excluir o cliente')
            }
        })
    }

    render() {
        return (
        <div className="pt-5">
            <div className="card card-pesquisa">
                <div className="card-header">Pesquisa de clientes</div>
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
                            <TablePesquisaCliente pesquisaClient={this.state.clientes} deleteAction={this.deletar} editAction={this.editar}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default withRouter(PesquisaClient);