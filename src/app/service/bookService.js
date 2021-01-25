import ApiService from '../apiService'

class BookService extends ApiService{

    constructor(){
        super()
    }

    cadastrarBook(book){
        return this.post('/books', book)
    }

    obterLivroPorId(id){
        return this.get(`/books/${id}`)
    }

}

export default BookService;