import React from 'react';


import Navbar from './components/Navbar';
import Rotas from './rotas';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <div className='container'>
          <Navbar />
            <Rotas />
        </div>
      </BrowserRouter>
  );
}

export default App;
