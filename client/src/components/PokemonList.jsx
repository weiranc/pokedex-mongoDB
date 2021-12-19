import React from 'react';
import Pokemon from './Pokemon.jsx';

const PokemonList = (props) => {
  return (
    <div>
      {props.pokedex.map(pokemon => {
        return (
          <Pokemon key={pokemon._id} pokemon={pokemon} getAll={props.getAll}/>
        )
      })}
    </div>
  )
}



export default PokemonList;