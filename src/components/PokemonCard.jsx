import PropTypes from "prop-types";

export default function PokemonCard({ pokemon, handleClick }) {
  return (
    <div className="pokemon-card" onClick={() => handleClick(pokemon.id)}>
      <img src={pokemon.png} />
    </div>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};
