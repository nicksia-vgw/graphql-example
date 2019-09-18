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
		id: ID
		friends: [User]
		apples: String
	}
`;

interface User {
	apples: String,
}

const users:User[] = [
	{apples: ""}
];

const resolvers = {
	Query: {
		me: async () => await users[0]
	},
	Mutation: {
		addFriend: async () => {
			await users.push({ apples: ""});
			pubsub.publish("user_updated", { userUpdated: users[0] });
			return users[0];
		},
		giveApple: async () => {
			const randomIndex = Math.floor(Math.random() * users.length);
			const randomUser = users[randomIndex];
			randomUser.apples += "o";

			await pubsub.publish("user_updated", { userUpdated: users[0] });
			return users[0];
		}
	},
	Subscription: {
		userUpdated: {
			subscribe: () => pubsub.asyncIterator(["user_updated"])
		}
	},
	User: {
		async friends(user: User) {
			return users;
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