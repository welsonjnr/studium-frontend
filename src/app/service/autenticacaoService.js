import ApiService from '../apiService'

export default class pesquisaLoanService extends ApiService{

    constructor(){
        super()
    }

    Login(login){
        return this.post('/auth', login)
    }
}