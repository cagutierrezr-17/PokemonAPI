import React, { useState } from 'react'
import './Pokemon.css'

function ApiPokemon() {

  const [pokemones, setPokemones] = useState([]);

  const pokemonApi = () => {

    fetch('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
      .then(response => response.json())
      .then(data => {
        setPokemones(data.results);
        console.log(setPokemones);
      }).catch(err => {
        console.log(err);
      })
  }

  return (
    <div className='container'>
      <button onClick={pokemonApi}>Obtener Pokémon</button>
      {pokemones.map((pokemon, index) => (
        <div className='lista'>
          <p>{index + 1}. {pokemon.name}</p>
        </div>
      ))}
    </div>
  );

}
export default ApiPokemon;
