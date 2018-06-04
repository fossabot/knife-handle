// eslint-disable-next-line no-global-assign
require = require('esm')(module)
const graphQLServer = require('./main.js').default
const { ApolloEngine } = require('apollo-engine')

const port = parseInt(process.env.PORT, 10) || 4000

if (process.env.APOLLO_ENGINE_KEY) {
  const engine = new ApolloEngine({
    apiKey: process.env.APOLLO_ENGINE_KEY
  })

  const httpServer = graphQLServer.createHttpServer({
    tracing: true,
    cacheControl: true
  })

  engine.listen(
    {
      port,
      httpServer,
      graphqlPaths: ['/']
    },
    () =>
      console.log(
        `Server with Apollo Engine is running on http://localhost:${port}`
      )
  )
} else {
  graphQLServer.start(
    {
      port
    },
    () => console.log(`Server is running on http://localhost:${port}`)
  )
}
