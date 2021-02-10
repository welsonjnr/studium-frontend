import React from 'react'
import { withRouter } from 'react-router-dom'
import './pesquisaClient.css'
import SelectMenu from '../../../components/selectmenu/selectMenu'
import TablePesquisaCliente from '../../../components/tablePesquisa/tablePesquisaCliente'

import PesquisaClientService from '../../../app/service/pesquisaClientService'
import {mensagemErro, mensagemSucesso} from '../../../components/toastr/toastr'

import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Dialog } from 'primereact/dialog'
import { Button } from 'primereact/button'

import 'bootstrap/dist/css/bootstrap.min.css';

class PesquisaClient extends React.Component {

    state = {
        nome:'',
        showConfirmDialog: false,
        clienteDeletar: {},
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

    deletar = () => {
        this.service
        .deletar(this.state.clienteDeletar.id)
        .then(response => {
            const clientes = this.state.clientes;
            const index = clientes.indexOf(this.clienteDeletar)
            clientes.splice(index, 1)
            this.setState({clientes: clientes, showConfirmDialog: false})

            mensagemSucesso('Cliente excluido com sucesso!')
        }).catch(error => {
            if(error = 500){
                mensagemErro('Não é possível excluir, ainda há empréstimos no nome do cliente')
            }else{
            mensagemErro('Não foi possível excluir o cliente')
            }
        })
    }

    abrirConfirmacao = (cliente) => {
        this.setState({showConfirmDialog: true, clienteDeletar: cliente})
    }

    abrirCadastroCliente = () => {
        this.props.history.push('/cadastro-cliente')
    }

    cancelarDelecao = () => {
        this.setState({showConfirmDialog: false, clienteDeletar: {}})
    }

    render() {

        const confirmDialogFooter = (
            <div>
                <Button Label="Confirmar" icon="pi pi-check" style={ { width: '40px' }} onClick={this.deletar}/>
                <Button Label="Cancelar" icon="pi pi-times" style={ { width: '40px' }} onClick={this.cancelarDelecao} className="p-button-secondary"/>
            </div>
        );

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
                        <Button onClick={this.abrirCadastroCliente} className="pi pi-plus btn-pesquisa" style={ {marginRight: '20px', padding: '10px', width: '70px'} }/>
                    </div>
                </div>
                <div className="row pt-4">
                    <div className="col-md-12">
                        <div className="bs-component">
                            <TablePesquisaCliente pesquisaClient={this.state.clientes} deleteAction={this.abrirConfirmacao} editAction={this.editar}/>
                        </div>
                    </div>
                    <div>
                        <Dialog header="Confirmação de Exclusão"
                                visible={this.state.showConfirmDialog}
                                footer={confirmDialogFooter}
                                style={{width: '50vw'}}
                                modal={true}
                                onHide={() => this.setState({showConfirmDialog: false})}>
                            Deseja mesmo excluir o cliente?            
                        </Dialog>
                    </div> 
                </div>
            </div>
        </div>
        )
    }
}

export default withRouter(PesquisaClient);