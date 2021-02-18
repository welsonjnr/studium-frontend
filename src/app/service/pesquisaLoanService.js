import ApiService from '../apiService'

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

    obterLoanByClientePorNome(nameClient){
        return this.get(`/loans/findLoanByClientName/${nameClient}`)
    }

    obterBookPorNome(nome){
        return this.get(`/books/findBookName/${nome}`)
    }
}