import ApiService from '../../apiService'

export default class pesquisaLoanService extends ApiService{

    constructor(){
        super()
    }

    pesquisarEmprestimos(){
        let params = `/loans`
        return this.get(params)
    }

    deletar(id){
        return this.delete(`/loans/${id}`)
    }

    cadastrarLoan(loan){
        return this.post('/loans', loan)
    }

    renovarLoan(loan){
        return this.put(`/loans/renew/${loan.id}`, loan)
    }

    retornarLoan(loan){
        return this.put(`/loans/return/${loan.id}`, loan)
    }

    obterClientePorNome(nome){
        return this.get(`/clients/findClientName/${nome}`)
    }

    obterClientePorNomeUnico(nome){
        return this.get(`/clients/findClientNameUnico/${nome}`)
    }

    obterLoanByClientePorNome(nameClient){
        return this.get(`/loans/findLoanByClientName/${nameClient}`)
    }

    obterLivroPorId(id){
        return this.get(`/books/${id}`)
    }

    obterBookPorNome(nome){
        return this.get(`/books/findBookName/${nome}`)
    }

    obterBookPorNomeUnico(nome){
        return this.get(`/books/findBookNameUnico/${nome}`)
    }
}