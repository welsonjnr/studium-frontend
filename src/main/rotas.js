import React from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'

import CardBook from '../components/card/card.js'


function Rotas(){
    return(
        <HashRouter>
            <Switch>
                <Route path="/cardbook" component={CardBook}/>
            </Switch>
        </HashRouter>
    )
}

export default Rotas;