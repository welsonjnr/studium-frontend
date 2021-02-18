import ApiService from '../apiService'

export default class pesquisaBookService extends ApiService{

    constructor(){
        super()
    }

    pesquisarLivros(){
        let params = `/books`
        return this.get(params)
    }

    pesquisarLivrosTelaPrincipal(){
        return this.get(`/books/principal`)
    }

    obterBookPorNome(nome){
        return this.get(`/books/findBookName/${nome}`)
    }

    deletar(id){
        return this.delete(`/books/${id}`)
    }
}