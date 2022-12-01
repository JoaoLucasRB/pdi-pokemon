const { getConnection } = require('../services/connection')

class Pokemon {
  static async findOne(parent, args, context, info) {
    const { id } = args;
    const connection = getConnection();

    async function run() {
      try {
        const collection = connection.collection("pokemon")
        const query = { id };
        const pokemon = await collection.findOne(query);
        return pokemon;
      } catch (e) {
        console.log(e)
        return false;
      } finally {
      } 
    }

    const result = await run().catch(console.dir);
    if(result)
      return result;
  }
  
  static async all(parent, args, context, info) {
    const { page = 0, limit = 10 } = args;
    const connection = getConnection();

    async function run() {
      try {
        const collection = connection.collection("pokemon")
        const pokemons = Array();
        await collection.find()
          .sort( {_id: 1})
          .skip(page > 0 ? ( ( page - 1 ) * limit ) : 0 )
          .limit(limit)
          .forEach(item => pokemons.push(item))
        return pokemons;
      } catch (e) {
        console.log(e)
        return false;
      } finally {
      } 
    }

    const result = await run().catch(console.dir);
    if(result)
      return result;
  }
}

module.exports = {
  Pokemon,
};
