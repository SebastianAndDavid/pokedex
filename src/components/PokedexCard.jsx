import PropTypes from "prop-types";

export default function PokedexCard({ pokemon }) {
  console.log(pokemon);
  return <div>{pokemon.name}</div>;
}
PokedexCard.propTypes = {
  pokemon: PropTypes.object.isRequired,
};
