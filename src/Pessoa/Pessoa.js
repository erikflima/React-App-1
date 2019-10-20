import React, { Component } from 'react';


//Funcao que retorna o conteudo html
const pessoa = ( parametrosrecebidos ) => {

    return <p>Olá, meu nome é {parametrosrecebidos.nome}  e minha idade é {parametrosrecebidos.idade}</p>

};


export default pessoa;