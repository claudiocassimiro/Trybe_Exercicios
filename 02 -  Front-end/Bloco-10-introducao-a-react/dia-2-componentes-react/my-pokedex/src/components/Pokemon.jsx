import React from 'react'
import PropTypes from 'prop-types'
import './Pokemon.css'

class Pokemon extends React.Component {
    render() {
        
        const pokemon = this.props.poke

        return (
            <div className="pokeCard">
                <div className="pokeInfo">
                    <h3>{pokemon.name}</h3>
                    <p>{pokemon.type}</p>
                    <p>Average weight: {pokemon.averageWeight.value} {pokemon.averageWeight.measurementUnit}</p>
                </div>
                <img src={pokemon.image} alt={pokemon.name} />
            </div>
        );
    }
}

Pokemon.propTypes = {
    poke: PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        averageWeight: PropTypes.shape({
            value: PropTypes.number.isRequired,
            measurementUnit: PropTypes.string.isRequired
        })
    })
}

export default Pokemon;