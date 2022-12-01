const { Pokemon } = require("../models");

const pokemonResolvers = {
  Query: {
    pokemon: (parent, args, context, info) => Pokemon.findOne(parent, args, context, info),
    pokemons: (parent, args, context, info) => Pokemon.all(parent, args, context, info),
  },
};

module.exports = {
  pokemonResolvers,
}
