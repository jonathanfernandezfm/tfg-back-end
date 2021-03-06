const { gql } = require('apollo-server');

const listQueries = gql`
	extend type Query {
		lists(id: String): [List]
	}

	extend type Mutation {
		addList(name: String!, description: String, public: Boolean, icon: String): List
		deleteList(id: ID!): String
		updateList(id: ID!, name: String, description: String, public: Boolean, icon: String): List
		addSeriesToList(id: ID!, serieIds: [String]!): List
		removeSeriesFromList(id: ID!, serieIds: [String]!): List
		addEpisodesToList(id: ID!, episodeIds: [String]!): List
		removeEpisodesFromList(id: ID!, episodeIds: [String]!): List
	}
`;

module.exports = {
	listQueries,
};
