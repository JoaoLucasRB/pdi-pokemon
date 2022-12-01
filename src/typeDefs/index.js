const { query } = require("./query");
const { bookType, moveType, statType, typeType, pokemonType } = require("./types");

const typeDefs = [query, bookType, moveType, statType, typeType, pokemonType];

module.exports = {
  typeDefs,
};
