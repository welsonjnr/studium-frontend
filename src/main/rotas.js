import React from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'

import PesquisaLoans from '../views/emprestimo/dashboard/DashboardEmprestimo' 
import CadastroUsuario from '../views/cliente/cadastro/CadastroCliente'
import PesquisaClient from '../views/cliente/dashboard/DashboardCliente'
import CadastroLivro from '../views/livro/cadastro/CadastroLivro'
import PesquisaBooks from '../views/livro/dashboard/DashboardLivro'
import TelaPrincipal from '../views/home/Home'
import CadastroEmprestimo from '../views/emprestimo/cadastro/CadastroEmprestimo'



function Rotas(){
    return(
        <HashRouter>
            <Switch>
                <Route path="/home" component={TelaPrincipal}/>
                <Route path="/pesquisa-emprestimos" component={PesquisaLoans}/>
                <Route path="/cadastro-cliente/:id?" component={CadastroUsuario}/>
                <Route path="/pesquisa-cliente" component={PesquisaClient}/>
                <Route path="/cadastro-livro/:id?" component={CadastroLivro}/>
                <Route path="/pesquisa-livro" component={PesquisaBooks}/>
                <Route path="/cadastro-emprestimo/:id?" component={CadastroEmprestimo}/>
            </Switch>
        </HashRouter>
    )
}

export default Rotas;