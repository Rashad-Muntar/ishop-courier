// import { ApolloClient, InMemoryCache, split, HttpLink } from '@apollo/client'
// import { WebSocketLink } from '@apollo/client/link/ws'
// // import { SubscriptionClient } from 'subscriptions-transport-ws'
// // import awsconfig from '../../aws-config'
// import { getMainDefinition } from '@apollo/client/utilities'
// import { Amplify, API } from 'aws-amplify'

// import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
// import { createClient } from 'graphql-ws'

// Amplify.configure(awsconfig)

// API.configure({
//   aws_appsync_graphqlEndpoint: awsconfig.aws_appsync_graphqlEndpoint,
//   aws_appsync_region: 'us-east-1',
//   aws_appsync_authenticationType: 'API_KEY',
//   apiKey: awsconfig.aws_appsync_apiKey,
// })

// const wsLink = new GraphQLWsLink(
//   createClient({
//     url: awsconfig.aws_appsync_graphqlEndpoint,
//     connectionParams: {
//       reconnect: true,
//       headers: {
//         'x-api-key': awsconfig.aws_appsync_apiKey,
//       },
//     },
//   })
// )

// const httpLink = new HttpLink({
//   uri: awsconfig.aws_appsync_graphqlEndpoint,
//   headers: {
//     'x-api-key': awsconfig.aws_appsync_apiKey,
//   },
// })

// const splitLink = split(
//   ({ query }) => {
//     const definition = getMainDefinition(query)
//     return (
//       definition.kind === 'OperationDefinition' &&
//       definition.operation === 'subscription'
//     )
//   },
//   wsLink,
//   httpLink
// )

// const Client = new ApolloClient({
//   link: splitLink,
//   cache: new InMemoryCache(),
// })

// export default Client
