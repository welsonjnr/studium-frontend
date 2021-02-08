import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rotas from '../main/rotas'
import Sidebar from '../components/sidebar/sidebar'
import { BreadCrumb } from 'primereact/breadcrumb';

function App() {
  return (
    <div>
      <Sidebar/>
      <div className="container">
        <Rotas />
      </div>
    </div>
  );
}

export default App;
