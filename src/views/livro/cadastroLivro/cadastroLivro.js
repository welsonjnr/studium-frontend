import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import './cadastroLivro.css'

import Card from '../../../components/card/card'

import BookService from '../../../app/service/bookService'

class CadastroLivro extends React.Component{

    state = {
        name: '',
        author: '',
        edition: '',
        amount: '',
        category: ''
    }

    constructor(){
        super();
        this.service = new BookService();
    }

    cadastrarLivro = () => {
        this.service.cadastrarBook({
            name: this.state.name,
            author: this.state.author,
            edition: this.state.edition,
            amount: this.state.amount,
            category: this.state.category
        }).then(response => {
            console.log(response)
        }).catch(erro => {
            console.log(erro)
        })
    }

    render(){
        return(
               <Card title="CADASTRO DE LIVRO" className="formLivro">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bs-component">
                                <input type="text" className="form-control"
                                id="inputNameBook" placeholder="Nome do Livro"
                                value={this.state.name} onChange={e => this.setState({name: e.target.value})}/>

                                <input type="text" className="form-control"
                                id="inputAuthorBook" placeholder="Autor"
                                value={this.state.author} onChange={e => this.setState({author: e.target.value})}/>
                                
                                <input type="text" className="form-control"
                                id="inputEditionBook" placeholder="Edição"
                                value={this.state.edition} onChange={e => this.setState({edition: e.target.value})}/>
                                
                                <input type="number" className="form-control"
                                id="inputAmountBook" placeholder="Quantidade de Livros"
                                value={this.state.amount} onChange={e => this.setState({amount: e.target.value})}/>
                            
                                <input type="number" className="form-control"
                                id="inputCategoryBook" placeholder="Categoria"
                                value={this.state.category} onChange={e => this.setState({category: e.target.value})}/>

                            </div>
                        </div>
                    </div>
                    <button onClick={this.cadastrarLivro} type="button" className="btn btn-primary">Cadastrar</button>
               </Card>
        )
    }
}

export default CadastroLivro;