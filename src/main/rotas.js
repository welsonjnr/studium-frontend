import React from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'

import PesquisaLoans from '../views/emprestimos/pesquisarEmprestimos' 
import CadastroUsuario from '../views/usuario/cadastroUsuario/cadastroUsuario'
import PesquisaClient from '../views/usuario/pesquisaUsuario/pesquisaClient'
import CadastroLivro from '../views/livro/cadastroLivro/cadastroLivro'
import PesquisaBooks from '../views/livro/pesquisaLivro/pesquisaLivro'
import TelaPrincipal from '../views/telaPrincipal/telaPrincipal'
import CadastroEmprestimo from '../views/emprestimos/cadastroEmprestimo'



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