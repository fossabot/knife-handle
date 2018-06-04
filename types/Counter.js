const typeDef = `
  type Counter {
    count: Int!
    countStr: String
  }
`

const resolvers = {
  Counter: {
    countStr: counter => `Current count: ${counter.count}`
  }
}

export { typeDef, resolvers }
