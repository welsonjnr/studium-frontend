import React from 'react'
import { withRouter } from 'react-router-dom'
import '../usuario/pesquisaUsuario/pesquisaClient.css'
import TablePesquisaLoans from '../../components/tablePesquisa/tablePesquisaLoans'

import PesquisaLoanService from '../../app/service/pesquisaLoanService'
import { mensagemErro, mensagemSucesso } from '../../components/toastr/toastr'

import '../emprestimos/emprestimo.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class CadastroEmprestimo extends React.Component {

    render() {
        return (
            <div className="pt-5">
                <div className="card card-pesquisa">
                    <div className="row">
                        <div className="col-md-10">
                            <input type="text" className="form-control input-pesquisa row"
                                id="inputNameBookLoan" placeholder="Nome do Livro" />
                            </div>
                            <div style={{marginTop: '23px', marginLeft: '25px'}}><button className="btn btn-success btn-sm"><FontAwesomeIcon className="fas fa-bars fa-2x" icon={faSearch} /></button></div>
                        </div>
                    <div className="card">
                    <div className="row">
                        <div className="col-md-10">
                            <input type="text" className="form-control input-pesquisa row"
                                id="inputNameBookLoan" placeholder="Nome do Cliente" />
                            </div>
                            <div style={{marginTop: '23px', marginLeft: '25px'}}><button className="btn btn-success btn-sm"><FontAwesomeIcon className="fas fa-bars fa-2x" icon={faSearch} /></button></div>
                        </div>
                    </div>
                    <button id="btn-cadastro-emprestimo" onClick={this.abrirCadastro} title="Emprestar" type="button" className="btn btn-primary col-md-2"> Empréstimo</button>
                </div>
            </div>
        )
    }
}

export default withRouter(CadastroEmprestimo)