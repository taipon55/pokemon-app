import Link from "next/link";

export function Pokemon({ pokemon }) {
  return (
    <>
      {/* リンク先を決める */}
      <Link href={"./components/Pokemoncard"}>
        <div className="pokemon">
          <div className="pokemon-number">
            <p>{pokemon.number}</p>
          </div>
          <div className="pokemon-image">
            <img src={pokemon.image} alt={pokemon.name} />
          </div>
          <div className="pokemon-name">
            <p>{pokemon.name}</p>
          </div>
        </div>
      </Link>
    </>
  );
}
