const { gql } = require("apollo-server");

const statType = gql`
  type InnerStat {
    name: String
    url: String
  }
  
  type Stat {
    base_stat: Int
    effort: Int
    stat: InnerStat!
  }
`;

module.exports = {
  statType,
};
