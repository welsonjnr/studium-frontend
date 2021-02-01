import ApiService from '../apiService'

export default class pesquisaClientService extends ApiService{

    constructor(){
        super()
    }

    pesquisarClientes(){
        let params = `/clients`
        return this.get(params)
    }

    deletar(id){
        return this.delete(`/clients/${id}`)
    }
}