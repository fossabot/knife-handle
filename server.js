// eslint-disable-next-line no-global-assign
require = require('esm')(module)
const apolloServer = require('./index').default

apolloServer.listen().then(({ url }) => console.log(`Server is running at ${url}`))
