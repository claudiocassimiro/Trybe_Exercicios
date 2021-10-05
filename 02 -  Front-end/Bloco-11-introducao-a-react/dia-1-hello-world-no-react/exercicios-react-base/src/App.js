import React from 'react';

const Task = (value, key) => {
  return (
    <li key={key}>{value}</li>
  );
}

const compromises = ['Estudar', 'Almoçar', 'Passear com o dog', 'Tomar banho'];
function App() {
  return (
    <ul>{compromises.map((compromise, key) => Task(compromise, key))}</ul>
  );
}

export default App;
