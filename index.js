import { ApolloServer, PubSub } from 'apollo-server'

import { typeDefs, resolvers } from './types'

const pubsub = new PubSub()
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  tracing: true,
  context: { pubsub }
})

export default apolloServer
