import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App nome="Rafael" idade={35} />
  </React.StrictMode>,
  document.getElementById('root')
);


