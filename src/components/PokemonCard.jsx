import PropTypes from "prop-types";

export default function PokemonCard({ pokemon }) {
  return (
    <div>
      <img src={pokemon.png} />
    </div>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.object.isRequired,
};
