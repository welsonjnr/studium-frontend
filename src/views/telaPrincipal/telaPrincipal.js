import React from 'react'
import ReactDOM from 'react-dom'
import { withRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './telaPrincipal.css'
import PesquisaBookService from '../../app/service/pesquisaBookService';
import { mensagemErro } from '../../components/toastr/toastr';


class TelaPrincipal extends React.Component {

    state = {
        name: '',
        author: '',
        edition: '',
        bookStatus: '',
        amount: '',
        category: '',
        books: []
    }

    constructor() {
        super();
        this.service = new PesquisaBookService();
    }

    abrirCadastro = (id) =>{
        this.props.history.push(`/cadastro-emprestimo/${id}`)
    }

    componentDidMount() {
        this.service
            .pesquisarLivrosTelaPrincipal()
            .then(response => {
                this.setState({ books: response.data })
            }).catch(error => {
                mensagemErro('Houve um erro ao carregar os livros, tente novamente')
            })
    }

    render() {
        const bookRender = this.state.books.map(book => {
            return (
                <div className="card card-body-book" key={book.id}>
                    <div className="card-title"> {book.name}</div>
                    <div className="card-text position-static">
                        <p className="format-font card-book-text">Autor: {book.author}</p>
                        <p className="format-font card-book-text">Edição: {book.edition}</p>
                        <p className="format-font card-book-text">Status: {book.bookStatus}</p>
                        <p className="format-font card-book-text">Quantidade: {book.amount}</p>
                        <p className="format-font card-book-text">Categoria: {book.category.name}</p>
                        <button id="btn-emprestimo" onClick={e => this.abrirCadastro(book.id)} title="Emprestar" type="button" className="btn btn-primary"> Empréstimo</button>
                    </div>
                </div>
            )
        })
        return (
            <div className="row">
                {bookRender}
            </div>
        )
    }
}

export default TelaPrincipal;