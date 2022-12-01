const { gql } = require("apollo-server");

const pokemonType = gql`  
  type Pokemon {
    id: Int
    moves: [Move!]
    name: String
    stats: [Stat!]
    types: [Type!]
  }
`;

module.exports = {
  pokemonType,
};
