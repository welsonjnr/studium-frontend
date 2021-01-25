import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import './cadastroUsuario.css'

import Card from '../../components/card/card'
import ClientsService from '../../app/service/clientService'
import {mensagemErro, mensagemSucesso} from '../../components/toastr/toastr'


class CadastroUsuario extends React.Component{

    state = {
        name: '',
        cpf: '',
        email: '',
        course: '',
        institution: '',
        period: ''
    }

    constructor(){
        super();
        this.service = new ClientsService();
    }

    cadastrarUsuario = () => {
        this.service.cadastrarClient({
            name: this.state.name,
            cpf: this.state.cpf,
            email: this.state.email,
            course: this.state.course,
            institution: this.state.institution,
            period: this.state.period
        }).then(response => {
            console.log(response)
        }).catch(erro => {
            mensagemErro('Não Cadastrado, Verifique as informações')
        })
    }

    render(){
        return(
            <div className="container">
               <Card title="CADASTRO DE USUÁRIO" className="formUsuario">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bs-component">
                                <input type="text" className="form-control"
                                id="inputNameClient" placeholder="Nome do Usuário"
                                value={this.state.name} onChange={e => this.setState({name: e.target.value})}/>

                                <input type="text" className="form-control"
                                id="inputCpfClient" placeholder="CPF"
                                value={this.state.cpf} onChange={e => this.setState({cpf: e.target.value})}/>
                                
                                <input type="text" className="form-control"
                                id="inputCursoClient" placeholder="Curso"
                                value={this.state.course} onChange={e => this.setState({course: e.target.value})}/>
                                
                                <input type="text" className="form-control"
                                id="inputInstituicaoClient" placeholder="Instituição"
                                value={this.state.institution} onChange={e => this.setState({institution: e.target.value})}/>
                                
                                <input type="email" className="form-control" 
                                id="inputEmailCliente" placeholder="Email"
                                value={this.state.email} onChange={e => this.setState({email: e.target.value})}/>
                            
                                <input type="number" className="form-control"
                                id="inputPeriodoClient" placeholder="Período"
                                value={this.state.period} onChange={e => this.setState({period: e.target.value})}/>
                            </div>
                        </div>
                    </div>
                    <button onClick={this.cadastrarUsuario} type="button" className="btn btn-primary">Cadastrar</button>
               </Card>
            </div>
        )
    }
}

export default CadastroUsuario;