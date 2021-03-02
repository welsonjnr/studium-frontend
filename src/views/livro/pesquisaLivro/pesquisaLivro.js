import React from 'react'
import { withRouter } from 'react-router-dom'
import '../../usuario/pesquisaUsuario/pesquisaClient.css'
import TablePesquisaBooks from '../../../components/tablePesquisa/tablePesquisaBooks'

import PesquisaBookService from '../../../app/service/pesquisaBookService'
import {mensagemErro, mensagemSucesso} from '../../../components/toastr/toastr'

import 'bootstrap/dist/css/bootstrap.min.css';
import './pesquisaLivro.css'

import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Dialog } from 'primereact/dialog'
import { Button } from 'primereact/button'

class PesquisaBooks extends React.Component {

    state = {
        nome:'',
        showConfirmDialog: false,
        bookDeletar: {},
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

        if(bookFiltro !== ''){
            this.service
            .obterBookPorNome(this.state.nome)
            .then(resposta => {
                this.setState({books: resposta.data})
                return false;
            })
        } 

        this.service
            .pesquisarLivros()
            .then(resposta => {
                mensagemSucesso('Livros carregados!')
                this.setState({ books: resposta.data  })
            }).catch( error => {
                mensagemErro('Não foi possível carregar os dados!')
            })
    }

    editar = (id) => {
        this.props.history.push(`/cadastro-livro/${id}`)
    } 

    deletar = () => {
        this.service
        .deletar(this.state.bookDeletar.id)
        .then(response => {
            const books = this.state.books;
            const index = books.indexOf(this.bookDeletar)
            books.splice(index, 1)
            this.setState({ books: books, showConfirmDialog: false})

            mensagemSucesso('Livro excluido com sucesso!')
        }).catch(error => {
            if(error = 500){
                mensagemErro('Não é possível excluir o livro, ele está em empréstimos')
            }else{
            mensagemErro('Não foi possível excluir o livro')
            }
        })
    }

    abrirConfirmacao = (book) => {
        this.setState({showConfirmDialog: true, bookDeletar: book})
    }

    cancelarDelecao = () => {
        this.setState({showConfirmDialog: false, bookDeletar: {}})
    }

    abrirCadastroLivro = () => {
        this.props.history.push(`/cadastro-livro`)
    }

    render() {

        const confirmDialogFooter = (
            <div>
                <Button Label="Confirmar" icon="pi pi-check" style={ { width: '40px' }} onClick={this.deletar}/>
                <Button Label="Cancelar" icon="pi pi-times" style={ { width: '40px' }} onClick={this.cancelarDelecao} className="p-button-secondary"/>
            </div>
        );

        return (
        <div className="pt-5">
            <div className="card card-pesquisa">
                <div className="card-header">Pesquisa de livro</div>
                <div className="row">
                    <div className="col-md-11">
                        <div className="bs-component">
                        <input type="text" className="form-control input-pesquisa"
                                value={this.state.nome} onChange={e => this.setState({nome: e.target.value})}
                                id="inputNameBook" placeholder="Nome do Livro*"/>
                        </div>
                        <button onClick={this.abrirCadastroLivro} type="button" className="btn btn-primary btn-pesquisa"> Novo</button>
                        <button onClick={this.buscar} type="button" className="btn btn-success btn-pesquisa"> Buscar</button>
                    </div>
                </div>
                <div className="row pt-4">
                    <div className="col-md-12">
                        <div className="bs-component">
                            <TablePesquisaBooks pesquisarLivros={this.state.books} deleteAction={this.abrirConfirmacao} editAction={this.editar}/>
                        </div>
                    </div>
                    <div>
                        <Dialog header="Confirmação de Exclusão"
                                visible={this.state.showConfirmDialog}
                                footer={confirmDialogFooter}
                                style={{width: '50vw'}}
                                modal={true}
                                onHide={() => this.setState({showConfirmDialog: false})}>
                            Deseja mesmo excluir o livro?            
                        </Dialog>
                    </div> 
                </div>
            </div>
        </div>
        )
    }
}

export default withRouter(PesquisaBooks);