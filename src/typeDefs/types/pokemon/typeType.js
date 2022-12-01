const { gql } = require("apollo-server");

const typeType = gql`
  type InnerType {
    name: String
    url: String
  }
  
  type Type {
    slot: Int
    type: InnerType!
  }
`;

module.exports = {
  typeType,
};
