import {commitMutation, fetchQuery, requestSubscription, Environment, Network, RecordSource, Store} from "relay-runtime";
import {SubscriptionClient} from "subscriptions-transport-ws";

export const environment = new Environment({
	network: Network.create(networkFetch, networkWebsocket),
	store: new Store(new RecordSource()),
});

export function executeMutation(mutation: any, variables: any = {}, onCompleted:(response:any) => any) {
	commitMutation(
		environment,
		{
			mutation,
			variables: variables,
			onCompleted: (response:any, errors:any) => {
				onCompleted(response);
			},
			onError: (err:any) => console.error(err),
		},
	);
}

export function executeQuery(query: any, variables: any = {}, onCompleted:(response:any) => any) {
	fetchQuery(environment, query, variables).then(response => onCompleted(response));
}

export function executeSubscription(subscription:any, variables: any = {}, onNext:(response:any) => any) {
	requestSubscription(
		environment,
		{
			subscription,
			variables,
			onNext,
			onCompleted: () => {
				// TODO: Retry reconnect;
			}
		}
	)
}

function networkFetch(operation: any, variables: any) {
	return fetch('http://localhost:4000/graphql', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query: operation.text,
			variables,
		}),
	}).then(response => {
		return response.json();
	});
}

function networkWebsocket(config:any, variables:any, cacheConfig:any, observer:any) {
	const query = config.text;
	const { onNext, onError, onCompleted } = observer;

	const subscriptionClient = new SubscriptionClient(
		'ws://localhost:4000/graphql',
		{
			reconnect: true
		}
	);

	subscriptionClient
		.request({ query, variables })
		.subscribe(onNext);

	return { dispose: () => subscriptionClient.unsubscribeAll() }
};