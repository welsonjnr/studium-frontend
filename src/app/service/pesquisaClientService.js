import ApiService from '../apiService'

export default class pesquisaClientService extends ApiService{

    constructor(){
        super()
    }

    pesquisarClientes(){
        let params = `/clients`
        return this.get(params)
    }

    obterClientePorNome(nome){
        return this.get(`/clients/findClientName/${nome}`)
    }

    deletar(id){
        return this.delete(`/clients/${id}`)
    }
}