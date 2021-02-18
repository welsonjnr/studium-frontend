import React from 'react'
import { withRouter } from 'react-router-dom'
import '../usuario/pesquisaUsuario/pesquisaClient.css'

import PesquisaLoanService from '../../app/service/pesquisaLoanService'
import { mensagemErro, mensagemSucesso } from '../../components/toastr/toastr'

import '../emprestimos/emprestimo.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class CadastroEmprestimo extends React.Component {

    state = {
        inputNomeLivroPesquisa: '',
        inputNomeClientePesquisa: '',
        autorLivro: '',
        quantidadeLivro: '',
        categoriaLivro: '',
        statusLivro: '',
        cpfCliente: '',
        emailCliente: '',
        statusCliente: '',
        modalParaPesquisaLivro: false,
        modalParaPesquisaCliente: false

    }

    constructor() {
        super();
        this.service = new PesquisaLoanService();
    }

    selecionarCliente = () => {
        
        const ClienteFiltro = {
            inputNomeClientePesquisa: this.state.inputNomeClientePesquisa
        }

        if(ClienteFiltro !== ''){
            this.service
            .obterLoanByClientePorNome(this.state.inputNomeClientePesquisa)
            .then(resposta => {
                console.log(resposta)
            })
        } 
    }

    selecionarLivro = () => {
        const LivroFiltro = {
            inputNomeLivroPesquisa : this.state.inputNomeLivroPesquisa
        }

        if(LivroFiltro !== ''){
            this.service
            .obterBookPorNome(this.state.inputNomeLivroPesquisa)
            .then(resposta => {
                console.log(resposta)
            })
        }
    }

    render() {
        return (
            <div className="pt-5">
                <div className="card card-pesquisa">
                    <div className="row">
                        <div className="col-md-10">
                            <input type="text" required="true" className="form-control input-pesquisa"
                                value={this.state.inputNomeLivroPesquisa} onChange={e => this.setState({inputNomeLivroPesquisa: e.target.value})}
                                id="inputNameBookLoan" placeholder="Nome do Livro" />
                            </div>
                            <div style={{marginTop: '23px', marginLeft: '35px'}}><button onClick={this.selecionarLivro} className="btn btn-success btn-sm"><FontAwesomeIcon className="fas fa-bars fa-2x" icon={faSearch} /></button></div>
                            <div className="col-md-11 row" style={{marginLeft: '32px'}}>
                            <input type="text" disabled="true" className="form-control col-md-3" id="inputshowAutorLivro" placeholder="autor" style={{marginRight: '2%'}}/>
                            <input type="text" disabled="true" className="form-control col-md-2" id="inputshowQuantidadeLivro" placeholder="quantidade" style={{marginRight: '2%'}}/>
                            <input type="text" disabled="true" className="form-control col-md-3" id="inputshowCategoriaLivro" placeholder="categoria" style={{marginRight: '2%' }}/>
                            <input type="text" disabled="true" className="form-control col-md-3" id="inputshowStatusLivro" placeholder="status"/>
                            </div>
                        </div>
                    <div className="card">
                    <div className="row">
                        <div className="col-md-10">
                            <input type="text" required="true" className="form-control input-pesquisa"
                                value={this.state.inputNomeClientePesquisa} onChange={e => this.setState({inputNomeClientePesquisa: e.target.value})}
                                id="inputNameBookLoan" placeholder="Nome do Cliente" />
                            </div>
                            <div style={{marginTop: '23px', marginLeft: '35px'}}><button onClick={this.selecionarCliente} className="btn btn-success btn-sm"><FontAwesomeIcon className="fas fa-bars fa-2x" icon={faSearch} /></button></div>
                            <div className="col-md-11 row" style={{marginLeft: '32px'}}>
                            <input type="text" value={this.state.cpfCliente} disabled="true" className="form-control col-md-4" id="inputshowCPFCliente" placeholder="CPF" style={{marginRight: '2.7%'}}/>
                            <input type="text" value={this.state.emailCliente} disabled="true" className="form-control col-md-4" id="inputshowEmailCliente" placeholder="email" style={{marginRight: '2.7%'}}/>
                            <input type="text" value={this.state.statusCliente} disabled="true" className="form-control col-md-3" id="inputshowStatusCliente" placeholder="status"/>
                            </div>
                        </div>
                    </div>
                    <button id="btn-cadastro-emprestimo" onClick={this.abrirCadastro} title="Emprestar" type="button" className="btn btn-primary col-md-2"> Empréstimo</button>
                </div>
            </div>
        )
    }
}

export default withRouter(CadastroEmprestimo)