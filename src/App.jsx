import { useEffect, useState } from "react";
import "./App.css";
import { getAllPokemon, getPokemonByName } from "./services/fetch-utils";
import PokemonCard from "./components/PokemonCard";
import PokedexCard from "./components/PokedexCard";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [clickedPokemon, setClickedPokemon] = useState({});
  const [pokedex, setPokedex] = useState([]);
  const [pokemonSearch, setPokemonSearch] = useState("");

  console.log("pokemonSearch", pokemonSearch);
  console.log("pokemon", pokemon);

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

  async function handleSubmit() {
    const data = await getPokemonByName(pokemonSearch);
    console.log("data", data);
    setPokemon(data);
  }

  return (
    <main>
      <header>
        <h2>Gotta Catch &apos;Em All</h2>
      </header>
      <label>
        Search for a Pokemon
        <input
          type="text"
          value={pokemonSearch}
          placeholder="Search for a Pokemon"
          onChange={(e) => setPokemonSearch(e.target.value)}
        />
        <button onClick={() => handleSubmit()} type="submit">
          Submit
        </button>
      </label>

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
