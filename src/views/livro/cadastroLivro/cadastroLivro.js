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
        category: ''
    }

    constructor() {
        super();
        this.service = new BookService();
    }

    validar() {
        const msgs = []

        if(!this.state.name){
            msgs.push('O campo nome é obrigatório!')
        }

        if(!this.state.author){
            msgs.push('O campo autor é obrigatório!')
        }

        if(!this.state.amount){
            msgs.push('O campo da quantidade é obrigatório!')
        }

        if(!this.state.category){
            msgs.push('O campo de categoria é obrigatório!')
        }

        return msgs;
    }

    cadastrarLivro = () => {
        const msgs = this.validar();

        if(msgs && msgs.length > 0){
            msgs.forEach( (msg, index) => {
                mensagemErro(msg)
            })
            return false
        }

        const livro = {
            name: this.state.name,
            author: this.state.author,
            edition: this.state.edition,
            amount: this.state.amount,
            category: this.state.category
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

    cancelarCadastroLivro = () => {
        this.props.history.push('/pesquisa-livro')
    }

    render() {
        return (
            <div className="container" id="containerPrincipal">
                <div className="row" id="cadastroLivro">
                    <div className="col" id="tituloTela">
                        CADASTRO DE LIVRO
                    </div>
                    <div className="col">
                        <Card title="CADASTRO DE LIVRO" className="formLivro">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="bs-component">
                                        <input type="text" className="form-control"
                                            id="inputNameBook" placeholder="Nome do Livro"
                                            value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />

                                        <input type="text" className="form-control"
                                            id="inputAuthorBook" placeholder="Autor"
                                            value={this.state.author} onChange={e => this.setState({ author: e.target.value })} />

                                        <input type="text" className="form-control"
                                            id="inputEditionBook" placeholder="Edição"
                                            value={this.state.edition} onChange={e => this.setState({ edition: e.target.value })} />

                                        <input type="number" className="form-control"
                                            id="inputAmountBook" placeholder="Quantidade de Livros"
                                            value={this.state.amount} onChange={e => this.setState({ amount: e.target.value })} />

                                        <input type="number" className="form-control"
                                            id="inputCategoryBook" placeholder="Categoria"
                                            value={this.state.category} onChange={e => this.setState({ category: e.target.value })} />

                                    </div>
                                </div>
                            </div>
                            <button onClick={this.cadastrarLivro} style={{marginRight: '8px'}} type="button" className="btn btn-primary">Cadastrar</button>
                            <button onClick={this.cancelarCadastroLivro} type="button" className="btn btn-danger">Cancelar</button>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(CadastroLivro);