import PropTypes from "prop-types";

export default function PokedexCard({ pokemon }) {
  return (
    <div className="pokedex-card">
      {pokemon.name}
      <img src={pokemon.gif} />
    </div>
  );
}
PokedexCard.propTypes = {
  pokemon: PropTypes.object.isRequired,
};
