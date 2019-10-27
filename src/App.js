import React, { Component } from 'react';
import Pessoa               from './Pessoa/Pessoa.js'; //Importando o componente que criei.
import './App.css';


class App extends Component {

  //Criando um objeto estatico javascript. Obs: Esse 'state' so funciona dentro de componentes.
  state = {

    nomesDePessoas: [
      { nome: 'Erik',    idade: 30},
      { nome: 'Vanessa', idade: 26},
      { nome: 'Sakura',  idade: 28}
    ]

  } 

  //Funcao que criei.
  trocarNomeHandler = () => {

    console.log('Executando a funcao "trocarNomeHandler()"');
    
    //Alterando o conteudo do objeto
    this.setState( {

      nomesDePessoas: [
        { nome: 'Keiko',   idade: 31},
        { nome: 'Chun-Li', idade: 32},
        { nome: 'Ono',     idade: 33}
      ]

    } )

  }


  //Crio o metdo 'render' e defino o conteudo que o metodo vai retornar. Que sera um codigo html a ser utilizado na pagina.
  render(){

    //Retorna um codigo html.
    return (

      <div className="classeQualquerQueInventeiONome">

        <h1>Erik Lima</h1>
        <h2>My First React App</h2>


        {/* Botao que executa uma funcao. */}
        <button onClick={this.trocarNomeHandler}>Trocar nomes</button>


        {/* Aqui eu coloco o componente que criei */}
        <Pessoa nome={this.state.nomesDePessoas[0].nome} idade={this.state.nomesDePessoas[0].idade} />

        {/* Aqui eu coloco o componente que criei */}
        <Pessoa nome={this.state.nomesDePessoas[1].nome} idade={this.state.nomesDePessoas[1].idade} />

        {/* Aqui eu coloco o componente que criei */}
        <Pessoa nome={this.state.nomesDePessoas[2].nome} idade={this.state.nomesDePessoas[2].idade}>Meus hobbies sao: Fazer exercicios</Pessoa>
           

      </div>
      
    );


  }

}

export default App;