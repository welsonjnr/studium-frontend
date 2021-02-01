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
}