import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import './cadastroUsuario.css'

import Card from '../../../components/card/card'
import ClientsService from '../../../app/service/clientService'
import { mensagemErro, mensagemSucesso } from '../../../components/toastr/toastr'
import { withRouter } from 'react-router-dom'

class CadastroUsuario extends React.Component {

    state = {
        name: '',
        cpf: '',
        email: '',
        course: '',
        institution: '',
        period: '',
        atualizando: false
    }

    constructor() {
        super();
        this.service = new ClientsService();
    }

    componentDidMount(){
        const params = this.props.match.params.id;
        if(params){
            this.service.obterClientePorId(params)
            .then(response => {
                this.setState({...response.data, atualizando: true})
            })
            .catch(error => {
                mensagemErro('Não foi possível carregar o cliente')
            })
        }
    }

    cadastrarUsuario = () => {

        const usuario = {
            name: this.state.name,
            cpf: this.state.cpf,
            email: this.state.email,
            course: this.state.course,
            institution: this.state.institution,
            period: this.state.period
        }

        try{
            this.service.validar(usuario);
        }catch(erro){
            const mensagens = erro.mensagens;
            mensagens.forEach(msg => mensagemErro(msg))
            return false
        }

        this.service.cadastrarClient(usuario)
            .then(response => {
                mensagemSucesso("Cliente Cadastrado com Sucesso!")
                this.props.history.push('/pesquisa-cliente')
            }).catch(error => {
                mensagemErro("Verifique as Informações!")
            })
    }

    atualizarCliente = () => {
        const cliente = {
            id: this.state.id,
            name: this.state.name,
            cpf: this.state.cpf,
            email: this.state.email,
            course: this.state.course,
            institution: this.state.institution,
            period: this.state.period
        }

        this.service.atualizarCliente(cliente)
        .then(response => {
            mensagemSucesso("Cliente atualizado com sucesso")
            this.props.history.push('/pesquisa-cliente')
        }).catch(erro => {
            mensagemErro("Verifique o erro")
        })

    }

    cancelarCadastroCliente = () => {
        this.props.history.push('/pesquisa-cliente')
    }

    render() {
        return (
            <div className="container" id="containerPrincipal">
                <div className="row" id="cadastroLivro">
                    <div className="col" id="tituloTela">
                        {this.state.atualizando ? 'ATUALIZAÇÃO DE CLIENTE' : 'CADASTRO DE CLIENTE'}
                    </div>
                    <div className="col">
                    <Card title={this.state.atualizando ? 'ATUALIZAÇÃO DE CLIENTE' : 'CADASTRO DE CLIENTE'}>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="bs-component">
                                    <input type="text" required="true" className="form-control"
                                        id="inputNameClient" placeholder="Nome do Usuário"
                                        value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />

                                    <input type="text" required="true" className="form-control"
                                        id="inputCpfClient" placeholder="CPF"
                                        value={this.state.cpf} onChange={e => this.setState({ cpf: e.target.value })} />

                                    <input type="text" className="form-control"
                                        id="inputCursoClient" placeholder="Curso"
                                        value={this.state.course} onChange={e => this.setState({ course: e.target.value })} />

                                    <input type="text" className="form-control"
                                        id="inputInstituicaoClient" placeholder="Instituição"
                                        value={this.state.institution} onChange={e => this.setState({ institution: e.target.value })} />

                                    <input type="email" required="true" className="form-control"
                                        id="inputEmailCliente" placeholder="Email"
                                        value={this.state.email} onChange={e => this.setState({ email: e.target.value })} />

                                    <input type="number" className="form-control"
                                        style={{marginBottom: "8px"}}
                                        id="inputPeriodoClient" placeholder="Período"
                                        value={this.state.period} onChange={e => this.setState({ period: e.target.value })} />
                                </div>
                            </div>
                        </div>
                        {this.state.atualizando?
                        (<button onClick={this.atualizarCliente} style={{marginRight: '8px'}} type="button" className="btn btn-success">Atualizar</button>)
                        : (
                        <button onClick={this.cadastrarUsuario} style={{marginRight: '8px'}} type="button" className="btn btn-primary">Cadastrar</button>)
                        }
                        <button onClick={this.cancelarCadastroCliente} type="button" className="btn btn-danger">Cancelar</button>
                    </Card>
                    </div>
                </div>
            </div>

        )
    }
}

export default withRouter(CadastroUsuario);