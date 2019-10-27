import React, { Component } from 'react';


//Funcao que retorna o conteudo html
const pessoa = ( parametrosrecebidos ) => {

    return (
    
        <div>

            <p>Olá, meu nome é {parametrosrecebidos.nome}  e minha idade é {parametrosrecebidos.idade}</p>

            {/* Aqui eu pego o a propriedade 'children' que eh o conteudo entre a tag de abertura e de fechamento. Exemplo: <tag>conteudo</tag>*/}
            <p>{parametrosrecebidos.children}</p>

        </div>
    
    )

};


export default pessoa;