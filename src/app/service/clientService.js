import ApiService from '../apiService'
import ErroValidacao from '../exception/erroValidacao'

class ClientsService extends ApiService{

    constructor(){
        super()
    }

    validar(cliente){
        const erros = [];

        if(!cliente.name){
            erros.push('O campo nome é obrigatório!')
        }

        if(!cliente.cpf){
            erros.push('O campo CPF é obrigatório!')
        }

        if(!cliente.email){
            erros.push('Verifique o campo Email!')
        }

        if(erros && erros.length > 0){
            throw new ErroValidacao(erros);
        }
    }

    cadastrarClient(cliente){
        return this.post('/clients', cliente)
    }

    obterClientePorId(id){
        return this.get(`/clients/${id}`)
    }

    atualizarCliente(cliente){
        return this.put(`/clients/${cliente.id}`, cliente)
    }

}

export default ClientsService;