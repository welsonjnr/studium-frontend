import React from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'

import CadastroUsuario from '../views/usuario/cadastroUsuario/cadastroUsuario'
import PesquisaClient from '../views/usuario/pesquisaUsuario/pesquisaClient'
import CadastroLivro from '../views/livro/cadastroLivro/cadastroLivro'
import PesquisaLivro from '../views/livro/pesquisaLivro/pesquisaLivro'
import TelaPrincipal from '../views/telaPrincipal/telaPrincipal'



function Rotas(){
    return(
        <HashRouter>
            <Switch>
                <Route path="/home" component={TelaPrincipal}/>
                <Route path="/cadastro-cliente" component={CadastroUsuario}/>
                <Route path="/pesquisa-cliente" component={PesquisaClient}/>
                <Route path="/cadastro-livro" component={CadastroLivro}/>
                <Route path="/pesquisa-livro" component={PesquisaLivro}/>
            </Switch>
        </HashRouter>
    )
}

export default Rotas;