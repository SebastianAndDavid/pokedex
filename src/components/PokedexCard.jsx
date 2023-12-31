import PropTypes from "prop-types";

export default function PokedexCard({ pokemon }) {
  return (
    <>
      {pokemon.id && (
        <div className="pokedex-card-container">
          <div className="pokedex-card">
            {pokemon.id && `#${pokemon.id}`}
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
      )}
    </>
  );
}
PokedexCard.propTypes = {
  pokemon: PropTypes.object.isRequired,
};
