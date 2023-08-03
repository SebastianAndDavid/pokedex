import PropTypes from "prop-types";

export default function PokedexCard({ pokemon }) {
  function switchClasses(id) {
    const ashClassName = "ash";
    const pokedexCardClassName = "pokedex-card-container";
    if (id == 152) {
      return ashClassName;
    } else {
      return pokedexCardClassName;
    }
  }

  return (
    <div className={pokemon.id === 152 ? "ash" : "pokedex-card-container"}>
      <div className="pokedex-card">
        {pokemon.id != 152 && `#${pokemon.id}`}
        <b>{pokemon.name}</b>
        <img src={pokemon.gif} />
      </div>
      <div className="pokedex-details">
        {pokemon.type1 && (
          <em>
            Type: {pokemon.type1}
            {pokemon.type2 && `/${pokemon.type2}`}
          </em>
        )}
        {pokemon.description && <p>{pokemon.description}</p>}
      </div>
    </div>
  );
}
PokedexCard.propTypes = {
  pokemon: PropTypes.object.isRequired,
};
