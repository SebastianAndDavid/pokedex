import { useEffect, useState } from "react";
import "./App.css";
import { getAllPokemon } from "./services/fetch-utils";
import PokemonCard from "./components/PokemonCard";
import PokedexCard from "./components/PokedexCard";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [clickedPokemon, setClickedPokemon] = useState({
    id: 152,
    gif: "data:image/jpeg;base64,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",
  });
  const [pokedex, setPokedex] = useState([]);
  // console.log("pokedex", pokedex);
  async function handleGetAllPokemon() {
    const data = await getAllPokemon();
    setPokemon(data);
  }

  useEffect(() => {
    handleGetAllPokemon();
  }, []);

  useEffect(() => {
    setPokedex([...pokedex, clickedPokemon]);
    handleGetAllPokemon();
  }, [clickedPokemon]);

  function handleClick(pokemon) {
    setClickedPokemon(pokemon);
  }

  // function compareArrays() {
  //   const inPokedex =
  //     pokedex && pokedex.find((poked) => poked.id === pokemon.id);
  //   console.log("pokedex", pokedex);
  //   console.log("pokemon id", pokemon.id);
  //   console.log("inPokedex", inPokedex);
  // }

  // compareArrays();

  return (
    <main>
      <header>
        <h2>Gotta Catch &apos;Em All</h2>
      </header>
      <div className="list-container">
        <div className="pokemon-list">
          {pokemon.map((poke, i) => {
            const inPokedex =
              pokedex && pokedex.find((poked) => poked.id === poke.id);
            console.log("inPokedex", inPokedex);
            // for each poke in [pokemon], check poke.id and if it matches inPokedex.id then deactive/gray out the <PokemanCard/> that matches poke.id

            return (
              <PokemonCard
                key={poke.id + i}
                pokemon={poke}
                handleClick={handleClick}
              />
            );
          })}
        </div>
        <div className="pokedex-list">
          {pokedex.map((poke, i) => {
            return <PokedexCard key={poke.id + i} pokemon={poke} />;
          })}
        </div>
      </div>
    </main>
  );
}

export default App;
