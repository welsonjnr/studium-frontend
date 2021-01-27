import React from 'react';

import Rotas from '../main/rotas'
import Sidebar from '../components/sidebar/sidebar'

function App() {
  return (
    <>
      <Sidebar />
      <div className="container">
        <Rotas />
      </div>
    </>
  );
}

export default App;
