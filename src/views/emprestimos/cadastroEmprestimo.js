import React from 'react'
import { withRouter } from 'react-router-dom'
import '../usuario/pesquisaUsuario/pesquisaClient.css'

import PesquisaLoanService from '../../app/service/pesquisaLoanService'
import { mensagemErro, mensagemSucesso } from '../../components/toastr/toastr'

import '../emprestimos/emprestimo.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import { faGrinTongueSquint, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class CadastroEmprestimo extends React.Component {

    state = {
        inputNomeLivroPesquisa: '',
        inputNomeClientePesquisa: '',
        cliente: {},
        book: {}
    }

    constructor() {
        super();
        this.service = new PesquisaLoanService();
    }

    componentDidMount(){
        const params = this.props.match.params.id;
        if(params){
            this.service.obterLivroPorId(params)
            .then(resposta => {
                const book = resposta.data
                console.log(resposta)
                this.setState({book})
                this.setState({inputNomeLivroPesquisa: book.name})
            })
        }
    }

    cadastrarEmprestimo = () => {
        const loan = {
            id: '',
            bookId: this.state.book.id,
            clientId : this.state.cliente.id
        }
        this.service.cadastrarLoan(loan)
        .then(resposta => {
            console.log(resposta)
            mensagemSucesso('Emprestimo realizado')
            this.props.history.push('/home')
        }).catch(erro => {
            mensagemErro('Não foi possível realizar o emprestimo')
            mensagemErro('Confira os campos dos STATUS')
            console.log(erro)
        })

    }

    selecionarCliente = () => {
        const ClienteFiltro = {
            inputNomeClientePesquisa: this.state.inputNomeClientePesquisa
        }

        if(ClienteFiltro !== ''){
            this.service
            .obterClientePorNomeUnico(this.state.inputNomeClientePesquisa)
            .then(resposta => {
                const cliente = resposta.data
                this.setState({ cliente });
            })
        } 
    }

    selecionarLivro = () => {
        const LivroFiltro = {
            inputNomeLivroPesquisa : this.state.inputNomeLivroPesquisa
        }

        if(LivroFiltro !== ''){
            this.service
            .obterBookPorNomeUnico(this.state.inputNomeLivroPesquisa)
            .then(resposta => {
                const book = resposta.data
                this.setState({book})
                console.log(book)
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
                                value={this.state.inputNomeLivroPesquisa == '' ? this.state.inputNomeLivroPesquisa : this.state.book.name} onChange={e => this.setState({inputNomeLivroPesquisa: e.target.value})}
                                id="inputNameBookLoan" placeholder="Nome do Livro" />
                            </div>
                            <div style={{marginTop: '23px', marginLeft: '35px'}}><button onClick={this.selecionarLivro} className="btn btn-success btn-sm"><FontAwesomeIcon className="fas fa-bars fa-2x" icon={faSearch} /></button></div>
                            <div className="col-md-11 row" style={{marginLeft: '32px'}}>
                            <input type="text" value={this.state.book.author} disabled="true" className="form-control col-md-3" id="inputshowAutorLivro" placeholder="autor" style={{marginRight: '2%'}}/>
                            <input type="text" value={this.state.book.amount} disabled="true" className="form-control col-md-2" id="inputshowQuantidadeLivro" placeholder="quantidade" style={{marginRight: '2%'}}/>
                            <input type="text" value={this.state.book.edition} disabled="true" className="form-control col-md-3" id="inputshowEditionLivro" placeholder="edição" style={{marginRight: '2%' }}/>
                            <input type="text" value={this.state.book.bookStatus} disabled="true" className="form-control col-md-3" id="inputshowStatusLivro" placeholder="status"/>
                            </div>
                        </div>
                    <div className="card">
                    <div className="row">
                        <div className="col-md-10">
                            <input type="text" required="true" className="form-control input-pesquisa"
                                value={this.state.inputNomeClientePesquisa == '' ? this.state.inputNomeClientePesquisa : this.state.cliente.name} onChange={e => this.setState({inputNomeClientePesquisa: e.target.value})}
                                id="inputNameBookLoan" placeholder="Nome do Cliente" />
                            </div>
                            <div style={{marginTop: '23px', marginLeft: '35px'}}><button onClick={this.selecionarCliente} className="btn btn-success btn-sm"><FontAwesomeIcon className="fas fa-bars fa-2x" icon={faSearch} /></button></div>
                            <div className="col-md-11 row" style={{marginLeft: '32px'}}>
                            <input type="text" value={this.state.cliente.cpf} disabled="true" className="form-control col-md-4" id="inputshowCPFCliente" placeholder="CPF" style={{marginRight: '2.7%'}}/>
                            <input type="text" value={this.state.cliente.email} disabled="true" className="form-control col-md-4" id="inputshowEmailCliente" placeholder="email" style={{marginRight: '2.7%'}}/>
                            <input type="text" value={this.state.cliente.status} disabled="true" className="form-control col-md-3" id="inputshowStatusCliente" placeholder="status"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    <button id="btn-cadastro-emprestimo" onClick={this.cadastrarEmprestimo} title="Emprestar" type="button" className="btn btn-primary col-md-2"> Empréstimo</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(CadastroEmprestimo)