import { GraphQLServer, PubSub } from 'graphql-yoga'

const typeDefs = `
  type Query {
    hello(name: String): String!
  }

  type Counter {
    count: Int!
    countStr: String
  }

  type Subscription {
    counter: Counter!
  }
`

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`
  },
  Counter: {
    countStr: counter => `Current count: ${counter.count}`
  },
  Subscription: {
    counter: {
      subscribe: (parent, args, { pubsub }) => {
        const channel = Math.random()
          .toString(36)
          .substring(2, 15) // random channel name
        let count = 0
        setInterval(
          () => pubsub.publish(channel, { counter: { count: count++ } }),
          2000
        )
        return pubsub.asyncIterator(channel)
      }
    }
  }
}

const pubsub = new PubSub()
const graphQLServer = new GraphQLServer({
  typeDefs,
  resolvers,
  context: { pubsub }
})

export default graphQLServer
