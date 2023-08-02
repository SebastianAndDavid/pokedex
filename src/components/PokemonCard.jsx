import PropTypes from "prop-types";

export default function PokemonCard({ pokemon, handleClick, inPokedex }) {
  return (
    <div
      className="pokemon-card"
      onClick={() => !inPokedex && handleClick(pokemon)}
      style={inPokedex && { backgroundColor: "#d3d3d3" }}
    >
      <img src={pokemon.png} />
    </div>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
  inPokedex: PropTypes.bool.isRequired,
};
