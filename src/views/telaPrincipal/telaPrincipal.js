import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios'

import BookService from '../../app/service/bookService'

import './telaPrincipal.css'


class telaPrincipal extends React.Component {

    state = {
        name: '',
        author: '',
        edition: '',
        bookStatus: '',
        amount: '',
        category: ''
    }

    constructor() {
        super();
        this.service = new BookService();
    }

    componentDidMount() {

        this.service.obterLivroPorId(2)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    author: response.data.author,
                    edition: response.data.edition,
                    bookStatus: response.data.bookStatus,
                    amount: response.data.amount,
                    category: response.data.category.name
                })
            })

    }

    render() {
        return (
            <div className="container">
                <div className="card card-body-book">
                    <div className="card-title"> {this.state.name}</div>
                    <div className="card-text position-static">
                        <p className="format-font card-book-text">Autor: {this.state.author}</p>
                        <p className="format-font card-book-text">Edição: {this.state.edition}</p>
                        <p className="format-font card-book-text">Status: {this.state.bookStatus}</p>
                        <p className="format-font card-book-text">Quantidade: {this.state.amount}</p>
                        <p className="format-font card-book-text">Categoria: {this.state.category}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default telaPrincipal;