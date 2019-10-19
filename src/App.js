import React, { Component } from 'react';
import Pessoa               from './Pessoa/Pessoa.js';
import './App.css';


class App extends Component {


  //Crio o metdo 'render' e defino o conteudo que o metodo vai retornar. Que sera um codigo html a ser utilizado na pagina.
  render(){

    //Retorna um codigo html.
    return (

      <div className="classeQualquerQueInventeiONome">

        <h1>Erik Lima</h1>
        <h2>My First React App</h2>

        {/* Aqui eu coloco o componente que criei */}
        <Pessoa />

      </div>
      
    );


  }

}

export default App;