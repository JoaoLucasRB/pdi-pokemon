const { gql } = require("apollo-server");

const query = gql`
  type Query {
    books: [Book]
    pokemon(id: Int!): Pokemon
    pokemons(page: Int, limit: Int): [Pokemon]
  }
`;

module.exports = {
  query,
};
