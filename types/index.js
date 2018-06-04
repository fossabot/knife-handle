import { typeDef as queryType, resolvers as queryResolvers } from './Query'
import {
  typeDef as counterType,
  resolvers as counterResolvers
} from './Counter'
import {
  typeDef as subscriptionType,
  resolvers as subscriptionResolvers
} from './Subscription'

const typeDefs = [queryType, counterType, subscriptionType]

const resolvers = {
  ...queryResolvers,
  ...counterResolvers,
  ...subscriptionResolvers
}

export { typeDefs, resolvers }
