import { useQuery } from "@apollo/client";
import React from "react";
import { GET_POKEMONS } from "../graphql/queries";
import { Pokemon } from "../components/Pokemon";

export function PokemonsContainer() {
  // graphqlから渡ってくる値の型指定
  type pokemons = {
    number: number;
    name: string;
    image: string;
  };

  //graphqlから渡ってきたデータを配列としていれる。
  // usequeryでサーバからデータを取得してくる。
  // variablesは最初から151まで取得するということ。
  // quereis.tsx定義していたでGET_POKEMONSをuseQueryで取得してきてpokemonsの配列に代入する。
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    // variablesは変数という意味
    variables: { first: 151 },
  });

  return (
    <>
      <div className="container">
        {/* &&（アンパサンド/またはという意味） は演算対象の両方が true ならば、&& は、true を返し、そうでなければ、false を返します。 */}
        {pokemons.map((pokemon: pokemons) => (
          <Pokemon key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}
