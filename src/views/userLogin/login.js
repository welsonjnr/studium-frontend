import React from 'react'
import { withRouter } from 'react-router-dom'
import {mensagemErro, mensagemSucesso} from '../../components/toastr/toastr'
import './login.css'
import AutenticacaoService from '../../app/service/autenticacaoService'

class Login extends React.Component {

    state = {
        email:'',
        senha: ''
    }

    constructor() {
        super();
        this.service = new AutenticacaoService();
    }

    login = () => {
        
        const login = {
            email: this.state.email,
            senha: this.state.senha
        }

        this.service.Login(login)
        .then(response => {
            mensagemSucesso("Logado com sucesso!")
            localStorage.setItem('authorization', response.data.token)
            this.props.history.push('/home')
        }).catch(error => {
            mensagemErro("Dados inválidos")
        })
    }
    render(){
        return(
            <div className="justify-content-center" >
                <div className="card mt-5 w-50">
                    <div className="card-header">Login</div>
                    <div className="row">
                        <div className="col-md-11">
                            <div className="bs-component">
                            <input type="text" className="form-control input-pesquisa"
                                    value={this.state.email} onChange={e => this.setState({email: e.target.value})}
                                    id="inputLoginEmail" placeholder="Email*"/>
                            <input type="text" className="form-control input-pesquisa"
                                    value={this.state.senha} onChange={e => this.setState({senha: e.target.value})}
                                    id="inputSenhaLogin" placeholder="Senha*"/>
                            </div>
                            <button onClick={this.login} type="button" className="btn btn-primary btn-login col-md-9">Entrar</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Login;