const { PubSub } = require('apollo-server');
const http = require('http');
const express = require('express');
const {ApolloServer, gql} = require('apollo-server-express');

const pubsub = new PubSub();

const typeDefs = gql`
    type Subscription {
        userUpdated: User
    }

    type Query {
        me: User
    }

    type Mutation {
        addFriend: User,
	    giveApple: User,
    }
	
	type User {
		friends: [User]
		apples: String
	}
`;

interface User {
	friends: User[],
	apples: String,
}

const users:User[] = [
	{friends: [], apples: ""}
];

const resolvers = {
	Query: {
		me: async () => await users[0]
	},
	Mutation: {
		addFriend: async () => {
			await users[0].friends.push({friends: [], apples: ""});
			pubsub.publish("user_updated", { userUpdated: users[0] });
			return users[0];
		},
		giveApple: async () => {
			const user = users[Math.floor(Math.random() * Math.floor(users.length))];
			user.apples += "o";
			pubsub.publish("user_updated", { userUpdated: users[0] });
			return users[0];
		}
	},
	Subscription: {
		userUpdated: {
			subscribe: () => pubsub.asyncIterator(["user_updated"])
		}
	}
};

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

const app = express();
server.applyMiddleware({app});
const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen(4000, () => {
	console.log(`🚀 Server ready at http://localhost:${4000}${server.graphqlPath}`);
	console.log(`🚀 Subscriptions ready at ws://localhost:${4000}${server.subscriptionsPath}`)
});