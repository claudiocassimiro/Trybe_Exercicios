import React from 'react';
import Pokedex from './components/Pokedex';
import pokemons from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Pokedex poke={pokemons}/>
    </div>
  );
}

export default App;
