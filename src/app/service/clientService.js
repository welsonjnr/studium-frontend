import ApiService from '../apiService'

class ClientsService extends ApiService{

    constructor(){
        super()
    }

    cadastrarClient(client){
        return this.post('/clients', client)
    }

}

export default ClientsService;