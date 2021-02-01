import ApiService from '../apiService'

export default class pesquisaBookService extends ApiService{

    constructor(){
        super()
    }

    pesquisarLivros(){
        let params = `/books`
        return this.get(params)
    }

    deletar(id){
        return this.delete(`/books/${id}`)
    }
}