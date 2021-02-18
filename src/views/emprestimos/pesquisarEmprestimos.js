import React from 'react'
import { withRouter } from 'react-router-dom'
import '../usuario/pesquisaUsuario/pesquisaClient.css'
import TablePesquisaLoans from '../../components/tablePesquisa/tablePesquisaLoans'

import PesquisaLoanService from '../../app/service/pesquisaLoanService'
import {mensagemErro, mensagemSucesso} from '../../components/toastr/toastr'

import 'bootstrap/dist/css/bootstrap.min.css';

import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Dialog } from 'primereact/dialog'
import { Button } from 'primereact/button'

class PesquisaLoans extends React.Component {

    state = {
        nome: '',
        showConfirmDialog: false,
        loanDeletar: {},
        loans : []
    }

    constructor(){
        super();
        this.service = new PesquisaLoanService();
    }

    buscar = () => {
     const loanClienteNomeFiltro = {
            nome: this.state.nome
        }

        if(loanClienteNomeFiltro !== ''){
         this.service
            .obterLoanByClientePorNome(this.state.nome)
            .then(resposta => {
                this.setState({loans: resposta.data})
                console.log(resposta)
                return false
            })
        }
        this.service
            .pesquisarEmprestimos()
            .then(resposta => {
                mensagemSucesso('Empréstimos carregados!')
                this.setState({ loans: resposta.data})
                console.log(resposta)
            }).catch( error => {
                mensagemErro('Não foi possível carregar os dados!')
            })
    }

    editar = (id) => {
            this.props.history.push(`/cadastro-emprestimo/${id}`)
    } 

    deletar = () => {
        this.service
        .deletar(this.state.loanDeletar.id)
        .then(response => {
            const loans = this.state.loans;
            const index = loans.indexOf(this.loanDeletar)
            loans.splice(index, 1)
            this.setState({loans: loans, showConfirmDialog: false})

            mensagemSucesso('Empréstimo excluido com sucesso!')
        }).catch(error => {
            if(error = 500){
                mensagemErro('Não é possível excluir o empréstimo, ele está em aberto')
            }else{
            mensagemErro('Não foi possível excluir o empréstimo')
            }
        })
    }

    abrirConfirmacao = (loan) => {
        this.setState({showConfirmDialog: true, loanDeletar: loan})
    }

    cancelarDelecao = () => {
        this.setState({showConfirmDialog: false, loanDeletar: {}})
    }

    abrirCadastroEmprestimo = () => {
        this.props.history.push(`/cadastro-emprestimo`)
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
                <div className="card-header">Pesquisa de empréstimos</div>
                <div className="row">
                    <div className="col-md-11">
                        <div className="bs-component">
                        <input type="text" className="form-control input-pesquisa"
                                value={this.state.nome} onChange={e => this.setState({nome: e.target.value})}
                                id="inputNameClientLoan" placeholder="Nome do Cliente"/>
                        </div>
                        <button onClick={this.buscar} type="button" className="btn btn-success btn-pesquisa"> Buscar</button>
                        <Button onClick={this.abrirCadastroEmprestimo} className="pi pi-plus btn-pesquisa" style={ {marginRight: '20px', padding: '10px', width: '70px'} }/>
                    </div>
                </div>
                <div className="row pt-4">
                    <div className="col-md-12">
                        <div className="bs-component">
                            <TablePesquisaLoans pesquisarEmprestimos={this.state.loans} deleteAction={this.abrirConfirmacao} editAction={this.editar}/>
                        </div>
                    </div>
                    <div>
                    <Dialog header="Confirmação de Exclusão"
                                visible={this.state.showConfirmDialog}
                                footer={confirmDialogFooter}
                                style={{width: '50vw'}}
                                modal={true}
                                onHide={() => this.setState({showConfirmDialog: false})}>
                            Deseja mesmo excluir o livro?            
                        </Dialog> 
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default withRouter(PesquisaLoans);