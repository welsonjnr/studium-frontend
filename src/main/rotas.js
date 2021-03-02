import React, { useState, useEffect } from 'react'
import { Route, Redirect, BrowserRouter, Switch } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import ApiService from '../app/apiService'

import PesquisaLoans from '../views/emprestimos/pesquisarEmprestimos'
import CadastroUsuario from '../views/usuario/cadastroUsuario/cadastroUsuario'
import PesquisaClient from '../views/usuario/pesquisaUsuario/pesquisaClient'
import CadastroLivro from '../views/livro/cadastroLivro/cadastroLivro'
import PesquisaBooks from '../views/livro/pesquisaLivro/pesquisaLivro'
import TelaPrincipal from '../views/telaPrincipal/telaPrincipal'
import CadastroEmprestimo from '../views/emprestimos/cadastroEmprestimo'
import Login from '../views/userLogin/login'
import MinhaConta from '../views/minhaConta/minhaConta'
import Dashboard from '../views/dashboard/Dashboard'

const getAuthorization = () => localStorage.getItem('authorization');
const getDecoded = (authorization) => jwt_decode(authorization);

const checkIfExpired = () => {
    const decoded = getDecoded(getAuthorization());
    const expiration = new Date().setUTCSeconds(decoded.exp);
    const dateNow = new Date().getUTCSeconds();


    return dateNow > expiration
}

function DefaultContainer() {
    // const { isAuthenticated, setIsAuthenticated } = useState(false);
    return (
        <BrowserRouter>
            <Switch>
                 <Route path="home" component={TelaPrincipal} />
                {/* <Route path="/login" component={Login} />
                <Route path="/dashboard" component={Rotas} /> */}
                {/* <Rotas /> */}
            </Switch>
        </BrowserRouter>
    )
}

// const LoginRoute = (props) => {
//     if (getAuthorization()) {
//         if(checkIfExpired()) {
//             localStorage.removeItem('authorization')
//             return 
//         }
//     }
// }

const Rotas = () => {
    return (
        <>
            <Route path="home" component={TelaPrincipal} />
            <ProtectedRoute path="pesquisa-emprestimos" component={PesquisaLoans} />
            <ProtectedRoute path="cadastro-cliente/:id?" component={CadastroUsuario} />
            <ProtectedRoute path="pesquisa-cliente" component={PesquisaClient} />
            <ProtectedRoute path="cadastro-livro/:id?" component={CadastroLivro} />
            <ProtectedRoute path="pesquisa-livro" component={PesquisaBooks} />
            <ProtectedRoute path="cadastro-emprestimo/:id?" component={CadastroEmprestimo} />
            <ProtectedRoute path="minha-conta/:id?" component={MinhaConta} />
        </>
    )
}

const ProtectedRoute = (props) => {
    const api = new ApiService()


    useEffect(() => {
        if (!getAuthorization()) {
            api.post('/auth', { email: 'a@gmail.com', senha: '123456' }).then(res => {
                localStorage.setItem('authorization', res.data.token);
            }).catch(e => {
                console.log(e);
            })
        }
        else {
            if (getAuthorization()) {
                if (checkIfExpired()) {
                    localStorage.removeItem('authorization');
                }
            }
        }
    });
    return getAuthorization() ? <Route {...props} /> : <Redirect to='/login' />
}

export { DefaultContainer, Rotas };