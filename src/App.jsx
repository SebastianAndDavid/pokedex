import { useEffect, useState } from "react";
import "./App.css";
import { getAllPokemon } from "./services/fetch-utils";
import PokemonCard from "./components/PokemonCard";
import PokedexCard from "./components/PokedexCard";

function App() {
  const [pokemon, setPokemon] = useState([]);

  async function handleGetAllPokemon() {
    const data = await getAllPokemon();
    setPokemon(data);
  }

  useEffect(() => {
    handleGetAllPokemon();
  }, []);

  function handleClick(id) {
    console.log(id);
  }

  return (
    <main>
      <header>
        <h2>Gotta Catch &apos;Em All</h2>
      </header>
      <div className="list-container">
        <div className="pokemon-list">
          {pokemon.map((poke, i) => {
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
          <PokedexCard />
        </div>
      </div>
    </main>
  );
}

export default App;
