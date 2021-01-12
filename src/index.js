import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import Sidebar from './components/sidebar/sidebar.js'
import CardBook from './components/cardbook/cardbook.js'
import TextBox from './components/textbox/textbox.js'

ReactDOM.render(
  <React.StrictMode>
    <Sidebar />
    <CardBook title="Nome do Livro"/>
    <TextBox type="email" id="idEmail" placeholder="Email"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

