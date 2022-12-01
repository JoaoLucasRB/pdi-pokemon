const { gql } = require("apollo-server");

const moveType = gql`
  type InnerMove {
    name: String
    url: String
  }
  
  type Move {
    move: InnerMove!
  }
`;

module.exports = {
  moveType,
};
