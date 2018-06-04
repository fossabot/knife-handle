import { GraphQLServer, PubSub } from 'graphql-yoga'
import { typeDefs, resolvers } from './types'

const pubsub = new PubSub()
const graphQLServer = new GraphQLServer({
  typeDefs,
  resolvers,
  context: { pubsub }
})

export default graphQLServer
