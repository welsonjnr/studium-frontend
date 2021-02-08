import React from 'react'
import { withRouter } from 'react-router-dom'
import '../../usuario/pesquisaUsuario/pesquisaClient.css'
import SelectMenu from '../../../components/selectmenu/selectMenu'
import TablePesquisaBooks from '../../../components/tablePesquisa/tablePesquisaBooks'
import CadastrarLivro from '../cadastroLivro/cadastroLivro'

import PesquisaBookService from '../../../app/service/pesquisaBookService'
import {mensagemErro, mensagemSucesso} from '../../../components/toastr/toastr'

import 'bootstrap/dist/css/bootstrap.min.css';
import './pesquisaLivro.css'

import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Dialog } from 'primereact/dialog'
import { Button } from 'primereact/button'
import CadastroLivro from '../cadastroLivro/cadastroLivro'

class PesquisaBooks extends React.Component {

    state = {
        nome:'',
        showConfirmDialog: false,
        bookDeletar: {},
        showBookCadastroDialog: false,
        bookCadastrar: {},
        cadastrarLivroConfirmModal: '',
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

    abrir

    abrirConfirmacao = (book) => {
        this.setState({showConfirmDialog: true, bookDeletar: book})
    }

    cancelarDelecao = () => {
        this.setState({showConfirmDialog: false, bookDeletar: {}})
    }

    cadastrarLivro = () => {
        this.setState({showBookCadastroDialog: true})
    }

    fecharCadastroLivro = () => {
        this.setState({showBookCadastroDialog: false, books: books})
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
                                id="inputNameBook" placeholder="Nome do Livro"/>
                        </div>
                        <button onClick={this.buscar} type="button" className="btn btn-success btn-pesquisa"> Buscar</button>
                        <Button onClick={this.cadastrarLivro} data-toggle="modal" data-target="#cadastro-livro" className="pi pi-plus btn-pesquisa" style={ {marginRight: '20px', padding: '10px', width: '70px'} }/>
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
                    <div className="modal fade" id="cadastro-livro" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden={this.state.showBookCadastroDialog}>
                        <CadastroLivro/>  
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default withRouter(PesquisaBooks);