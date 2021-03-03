import ApiService from '../../apiService'

export default class pesquisaLoanService extends ApiService{

    constructor(){
        super()
    }

    pesquisarEmprestimos(){
        let params = `/library/loans`
        return this.get(params)
    }

    deletar(id){
        return this.delete(`/library/loans/${id}`)
    }

    cadastrarLoan(loan){
        return this.post('/library/loans', loan)
    }

    renovarLoan(loan){
        return this.put(`/library/loans/renew/${loan.id}`, loan)
    }

    retornarLoan(loan){
        return this.put(`/library/loans/return/${loan.id}`, loan)
    }

    obterClientePorNomeUnico(nome){
        return this.get(`/library/clients/findClientNameUnico/${nome}`)
    }

    obterLoanByClientePorNome(nameClient){
        return this.get(`/library/loans/findLoanByClientName/${nameClient}`)
    }

    obterLivroPorId(id){
        return this.get(`/library/books/${id}`)
    }

    obterBookPorNome(nome){
        return this.get(`/library/books/findBookName/${nome}`)
    }

    obterBookPorNomeUnico(nome){
        return this.get(`/library/books/findBookNameUnico/${nome}`)
    }
}