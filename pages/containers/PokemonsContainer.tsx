import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../graphql/queries";
import { Pokemon } from "../components/Pokemon";
import PokemonCard from "../pokestatus/PokemonCard";
export function PokemonsContainer() {
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 151 },
  });

  return (
    <>
      <div className="container">
        {pokemons &&
          pokemons.map((pokemon) => (
            <Pokemon key={pokemon.id} pokemon={pokemon} />
          ))}
      </div>
      <div className="container">
        {pokemons &&
          pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
      </div>
    </>
  );
}
