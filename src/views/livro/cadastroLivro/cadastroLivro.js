import React from 'react'
import ReactDOM from 'react-dom'
import { withRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {mensagemErro, mensagemSucesso} from '../../../components/toastr/toastr'
import './cadastroLivro.css'

import Card from '../../../components/card/card'

import BookService from '../../../app/service/bookService'

class CadastroLivro extends React.Component {

    state = {
        name: '',
        author: '',
        edition: '',
        amount: '',
        category: '',
        atualizando: false
    }

    constructor() {
        super();
        this.service = new BookService();
    }

    componentDidMount(){
        const params = this.props.match.params.id;
        if(params){
            this.service.obterLivroPorId(params)
            .then(response => {
                this.setState({...response.data, atualizando: true})
            })
            .catch(error => {
                console.log(error)
            })
        }
    }

    cadastrarLivro = () => {
        
        const livro = {
            name: this.state.name,
            author: this.state.author,
            edition: this.state.edition,
            amount: this.state.amount,
            category: this.state.category
        }

        try{
            this.service.validar(livro);
        }catch(erro){
            const mensagens = erro.mensagens;
            mensagens.forEach(msg => mensagemErro(msg))
            return false
        }

        this.service.cadastrarBook(livro)
        .then(response => {
            console.log(response)
            mensagemSucesso("Livro Cadastrado com Sucesso!")
            this.props.history.push('/pesquisa-livro')
        }).catch(erro => {
            mensagemErro("Verifique as Informações")
            console.log(erro)
        })
    }

    atualizarLivro = () => {

        const livro = {
            id: this.state.id,
            name: this.state.name,
            author: this.state.author,
            edition: this.state.edition,
            amount: this.state.amount,
            category: this.state.category
        }

        this.service.atualizarLivro(livro)
        .then(response => {
            console.log(response)
            mensagemSucesso("Livro atualizado com sucesso!")
            this.props.history.push('/pesquisa-livro')
        }).catch(erro => {
            mensagemErro("Verifique as Informações")
            console.log(erro)
        })
    }

    cancelarCadastroLivro = () => {
        this.props.history.push('/pesquisa-livro')
    }

    render() {
        return (
            <div className="container" id="containerPrincipal">
                <div className="row" id="cadastroLivro">
                    <div className="col" id="tituloTela">
                        {this.state.atualizando ? 'ATUALIZAÇÃO DE LIVRO' : 'CADASTRO DE LIVRO'}
                    </div>
                    <div className="col">
                        <Card title={this.state.atualizando ? 'ATUALIZAÇÃO DE LIVRO' : 'CADASTRO DE LIVRO'} className="formLivro">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="bs-component">
                                        <input type="text" required="true" className="form-control"
                                            id="inputNameBook" placeholder="Nome do Livro"
                                            value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />

                                        <input type="text" required="true" className="form-control"
                                            id="inputAuthorBook" placeholder="Autor"
                                            value={this.state.author} onChange={e => this.setState({ author: e.target.value })} />

                                        <input type="text" className="form-control"
                                            id="inputEditionBook" placeholder="Edição"
                                            value={this.state.edition} onChange={e => this.setState({ edition: e.target.value })} />

                                        <input type="number" required="true" className="form-control"
                                            id="inputAmountBook" placeholder="Quantidade de Livros"
                                            value={this.state.amount} onChange={e => this.setState({ amount: e.target.value })} />

                                        <input type="number" required="true" className="form-control"
                                            id="inputCategoryBook" placeholder="Categoria"
                                            value={this.state.category} onChange={e => this.setState({ category: e.target.value })} />

                                    </div>
                                </div>
                            </div>
                            {this.state.atualizando ? 
                                (<button onClick={this.atualizarLivro} style={{marginRight: '8px'}} type="button" className="btn btn-success">Atualizar</button>
                                ) : (
                                <button onClick={this.cadastrarLivro} style={{marginRight: '8px'}} type="button" className="btn btn-primary">Cadastrar</button>
                                )
                            }
                            
                            
                            <button onClick={this.cancelarCadastroLivro} type="button" className="btn btn-danger">Cancelar</button>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(CadastroLivro);