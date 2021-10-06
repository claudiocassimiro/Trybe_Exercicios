import React from 'react';
import Pokemon from './Pokemon';
import './Pokedex.css'
import PropTypes from 'prop-types'

class Pokedex extends React.Component {
    render() {
        
        const pokemons = this.props.poke;

        return (
            <div className="containerPokemons">
                {pokemons.map(pokemon => <Pokemon key={pokemon.id} poke={pokemon}/>)}
            </div>
        );
    }
}

Pokedex.propTypes = {
    poke: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Pokedex;