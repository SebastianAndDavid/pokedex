import { useEffect, useState } from "react";
import "./App.css";
import { getAllPokemon } from "./services/fetch-utils";
import PokemonCard from "./components/PokemonCard";
import PokedexCard from "./components/PokedexCard";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [clickedPokemon, setClickedPokemon] = useState({});
  const [pokedex, setPokedex] = useState([]);
  async function handleGetAllPokemon() {
    const data = await getAllPokemon();
    setPokemon(data);
  }

  useEffect(() => {
    handleGetAllPokemon();
  }, []);

  useEffect(() => {
    setPokedex([clickedPokemon, ...pokedex]);
    handleGetAllPokemon();
  }, [clickedPokemon]);

  function handleClick(pokemon) {
    setClickedPokemon(pokemon);
  }

  return (
    <main>
      <header>
        <h2>Gotta Catch &apos;Em All</h2>
      </header>
      <div className="list-container">
        <div className="pokemon-list">
          {pokemon.map((poke, i) => {
            const inPokedex =
              pokedex.length > 0 &&
              pokedex.find((poked) => poked.id === poke.id);
            console.log("inPokedex", inPokedex);
            if (inPokedex && inPokedex.id == poke.id) {
              return (
                <PokemonCard
                  key={poke.id + i}
                  pokemon={poke}
                  handleClick={handleClick}
                  inPokedex={true}
                />
              );
            }
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
            return <PokedexCard key={poke.id + i + poke.name} pokemon={poke} />;
          })}
        </div>
      </div>
    </main>
  );
}

export default App;
