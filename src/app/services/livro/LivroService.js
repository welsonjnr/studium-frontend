import ApiService from '../../apiService'
import ErroValidacao from '../../exceptions/ErroValidacao'

class BookService extends ApiService{

    constructor(){
        super()
    }

    validar(livro){
        const erros = [];

        if(!livro.name){
            erros.push('O campo nome é obrigatório!')
        }

        if(!livro.author){
            erros.push('O campo autor é obrigatório!')
        }

        if(!livro.amount){
            erros.push('O campo da quantidade é obrigatório!')
        }

        if(!livro.category){
            erros.push('O campo de categoria é obrigatório!')
        }

        if(erros && erros.length > 0){
            throw new ErroValidacao(erros);
        }
    }

    cadastrarBook(livro){
        return this.post('/library/books', livro)
    }

    obterLivroPorId(id){
        return this.get(`/library/books/${id}`)
    }

    atualizarLivro(livro){
        return this.put(`/library/books/${livro.id}`, livro )
    }

}

export default BookService;