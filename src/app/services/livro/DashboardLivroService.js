import ApiService from '../../apiService'

export default class pesquisaBookService extends ApiService{

    constructor(){
        super()
    }

    pesquisarLivros(filtro){
        let params = `/library/books/findBookByName/${filtro}`
        return this.get(params)
    }

    pesquisarBooksPerPage(){
        let params = `/library/books/find/page`
        return this.get(params)
    }

    homeLivros(){
        return this.get(`/library/books/home`)
    }

    obterBookPorNome(nome){
        return this.get(`/library/books/findBookByName/${nome}`)
    }

    deletar(id){
        return this.delete(`/library/books/${id}`)
    }
}