import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import Sidebar from './components/sidebar/sidebar'
import CadastroUsuario from './views/cadastroUsuario/cadastroUsuario.js'
import Card from './components/card/card'


ReactDOM.render(
  <React.StrictMode>
    <CadastroUsuario/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

