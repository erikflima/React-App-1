import React                 from 'react';
import ReactDOM              from 'react-dom';
import App                   from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

/*
Usando o objeto 'ReactDOM' que peguei da biblioteca 'react-dom' que importei. 
Esse metodo permite rendererizar, ou seja criar componente.
  - app      -> Nome da classe que tem o metodo 'render', ou seja "App.js". Ai o metodo render tem o codigo html que vai compor o componente.
  - minhaTag -> Nome que eu inventei para ser usado como id do componente no arquivo 'index.html' */
ReactDOM.render( <App />, document.getElementById('minhaTag') );


registerServiceWorker();