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

    deletar(id){
        return this.delete(`/books/${id}`)
    }
}