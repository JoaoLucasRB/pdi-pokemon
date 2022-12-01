const { ApolloServer, gql } = require('apollo-server');
const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");


const server = new ApolloServer({ typeDefs, resolvers });

// async function run() {
//   try {
//     const database = client.db('collection-pdi');
//     const movies = database.collection('pokemon');
//     // Query for a movie that has the title 'Back to the Future'
//     const query = { name: 'bulbasaur' };
//     const movie = await movies.findOne(query);
//     console.log(movie);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
