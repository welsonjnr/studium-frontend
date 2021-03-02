import React from 'react'
import { withRouter } from 'react-router-dom'
import {mensagemErro, mensagemSucesso} from '../../components/toastr/toastr'

class MinhaConta extends React.Component {

    state = {
        nome: '',
        email: '',
    }

    render(){
        return(
            <h1>
                Login
            </h1>
        )
    }

}

export default withRouter(MinhaConta);