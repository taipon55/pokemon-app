import Link from "next/link";

function PokemonCard({ pokemon }) {
  return (
    <>
      <div>
        <p>{pokemon.number}</p>

        <img src={pokemon.image} alt={pokemon.name} />

        <p>{pokemon.name}</p>

        <Link href={"/"}>一覧に戻る</Link>
      </div>
    </>
  );
}

export default PokemonCard;
