import React from 'react';
import ReactDOM from 'react-dom';


import 'toastr/build/toastr.min.js'

//import App from './App';
import Sidebar from './components/sidebar/sidebar'
import CadastroUsuario from './views/usuario/cadastroUsuario/cadastroUsuario.js'
import CadastroLivro from './views/livro/cadastroLivro/cadastroLivro'
import Card from './components/card/card'
import TelaPrincipal from './views/telaPrincipal/telaPrincipal';

import 'toastr/build/toastr.css'


ReactDOM.render(
  <React.StrictMode>
    <Sidebar/>
    <CadastroUsuario/>
    <CadastroLivro/>
    <TelaPrincipal/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

