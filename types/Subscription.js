const typeDef = `
  type Subscription {
    counter: Counter!
  }
`

const resolvers = {
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

export { typeDef, resolvers }
