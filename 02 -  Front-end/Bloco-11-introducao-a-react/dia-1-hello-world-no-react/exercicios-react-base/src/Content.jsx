import React from 'react'

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

class Content extends React.Component {
    render() {
        return (
            conteudos.map((dados, index) => {
                return (
                    <div key={index}>
                        <p>O conteúdo é:{dados.conteudo}</p>
                        <p>Status: {dados.status}</p>
                        <p>Bloco: {dados.bloco}</p>
                    </div>
                );
            })
        );
    }
}

export default Content;