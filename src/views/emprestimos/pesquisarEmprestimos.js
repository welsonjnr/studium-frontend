import React from 'react'
import { withRouter } from 'react-router-dom'
import '../usuario/pesquisaUsuario/pesquisaClient.css'
import TablePesquisaLoans from '../../components/tablePesquisa/tablePesquisaLoans'

import PesquisaLoanService from '../../app/service/pesquisaLoanService'
import {mensagemErro, mensagemSucesso} from '../../components/toastr/toastr'

import 'bootstrap/dist/css/bootstrap.min.css';

class PesquisaLoans extends React.Component {

    state = {
        nome: '',
        loans : []
    }

    constructor(){
        super();
        this.service = new PesquisaLoanService();
    }

    buscar = () => {
        const loanFiltro = {
            nome: this.state.nome
        }
        this.service
            .pesquisarEmprestimos(loanFiltro)
            .then(resposta => {
                mensagemSucesso('Empréstimos carregados!')
                this.setState({ loans: resposta.data  })
                console.log(this.state.loans)
            }).catch( error => {
                mensagemErro('Não foi possível carregar os dados!')
            })
    }

    editar = (id) => {
        
    } 

    deletar = (loan) => {
        this.service
        .deletar(loan.id)
        .then(response => {
            const loans = this.state.loans;
            const index = loans.indexOf(loan)
            loans.splice(index, 1)
            this.setState(loans)

            mensagemSucesso('Empréstimo excluido com sucesso!')
        }).catch(error => {
            if(error = 500){
                mensagemErro('Não é possível excluir o empréstimo, ele está em aberto')
            }else{
            mensagemErro('Não foi possível excluir o empréstimo')
            }
        })
    }

    render() {
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
                    </div>
                </div>
                <div className="row pt-4">
                    <div className="col-md-12">
                        <div className="bs-component">
                            <TablePesquisaLoans pesquisarEmprestimos={this.state.loans} deleteAction={this.deletar} editAction={this.editar}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default withRouter(PesquisaLoans);