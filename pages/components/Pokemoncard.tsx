import React from "react";

function Pokemoncard({ pokemons }) {
  return (
    <>
      <div className="pokemon-number">
        <p>{pokemons.number}</p>
      </div>
      <div className="pokemon-image">
        <img src={pokemons.image} alt={pokemons.name} />
      </div>
      <div className="pokemon-name">
        <p>{pokemons.name}</p>
      </div>
    </>
  );
}

export default Pokemoncard;
