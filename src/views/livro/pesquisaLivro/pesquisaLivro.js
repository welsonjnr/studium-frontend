import React from 'react'
import { withRouter } from 'react-router-dom'
import '../../usuario/pesquisaUsuario/pesquisaClient.css'
import SelectMenu from '../../../components/selectmenu/selectMenu'
import TablePesquisaBooks from '../../../components/tablePesquisa/tablePesquisaBooks'

import PesquisaBookService from '../../../app/service/pesquisaBookService'
import {mensagemErro, mensagemSucesso} from '../../../components/toastr/toastr'

import 'bootstrap/dist/css/bootstrap.min.css';

class PesquisaBooks extends React.Component {

    state = {
        nome:'',
        books : []
    }

    constructor(){
        super();
        this.service = new PesquisaBookService();
    }

    buscar = () => {
        const bookFiltro = {
            nome: this.state.nome
        }
        this.service
            .pesquisarLivros(bookFiltro)
            .then(resposta => {
                mensagemSucesso('Livros carregados!')
                this.setState({ books: resposta.data  })
                console.log(this.state.books)
            }).catch( error => {
                mensagemErro('Não foi possível carregar os dados!')
            })
    }

    editar = (id) => {
        
    } 

    deletar = (book) => {
        this.service
        .deletar(book.id)
        .then(response => {
            const books = this.state.books;
            const index = books.indexOf(book)
            books.splice(index, 1)
            this.setState(books)

            mensagemSucesso('Livro excluido com sucesso!')
        }).catch(error => {
            if(error = 500){
                mensagemErro('Não é possível excluir o livro, ele está em empréstimos')
            }else{
            mensagemErro('Não foi possível excluir o livro')
            }
        })
    }

    render() {
        return (
        <div className="pt-5">
            <div className="card card-pesquisa">
                <div className="card-header">Pesquisa de livro</div>
                <div className="row">
                    <div className="col-md-11">
                        <div className="bs-component">
                        <input type="text" className="form-control input-pesquisa"
                                value={this.state.nome} onChange={e => this.setState({nome: e.target.value})}
                                id="inputNameBook" placeholder="Nome do Livro"/>
                        </div>
                        <button onClick={this.buscar} type="button" className="btn btn-success btn-pesquisa"> Buscar</button>
                    </div>
                </div>
                <div className="row pt-4">
                    <div className="col-md-12">
                        <div className="bs-component">
                            <TablePesquisaBooks pesquisarLivros={this.state.books} deleteAction={this.deletar} editAction={this.editar}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default withRouter(PesquisaBooks);