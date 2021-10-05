import React from 'react'
import './App.css';

const Task = (value, index) => {
  return (
    <li key={index}>{value}</li>
  );
}

function App() {
  const myCompromises = ['Passear com o cachorro', 'Lavar a moto', 'Comprar pão', 'Estudar'];

  return (
    <ul>
      {myCompromises.map((compromise, index) => {
        return Task(compromise, index);  
      })}
    </ul>
  );
}

export default App;
