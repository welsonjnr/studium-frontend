import ApiService from '../../apiService'

export default class pesquisaClientService extends ApiService{

    constructor(){
        super()
    }

    pesquisarClientes(filtro){
        let params = `/library/clients/findClientByName/${filtro}`
        return this.get(params)
    }

    obterClientePorNome(nome){
        return this.get(`/library/clients/findClientName/${nome}`)
    }

    deletar(id){
        return this.delete(`/library/clients/${id}`)
    }
}