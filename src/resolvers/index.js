const { booksResolvers } = require('./booksResolvers');
const { pokemonResolvers } = require('./pokemonResolvers');

const resolvers = [booksResolvers, pokemonResolvers];

module.exports = {
  resolvers,
};
