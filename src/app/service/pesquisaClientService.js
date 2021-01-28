import ApiService from '../apiService'

export default class pesquisaClientService extends ApiService{

    constructor(){
        super('/clients')
    }

    pesquisarClientes(clienteFiltro){
        let params = `?nome=${clienteFiltro.nome}`
    

        return this.get(params)
    }
}