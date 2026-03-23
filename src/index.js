import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//Esse aqui é o ponto de entrada do site, primeiro arquivo que é executado.
//<React.StrictMode> a função dele é ajudar a previnir erro. ele coloca os logs dos erros no navegador.
// reportWebVitals parte de desempenho.
//
//
