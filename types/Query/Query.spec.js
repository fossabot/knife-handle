/* global describe it expect */
import { resolvers } from '../Query'

const {
  Query: { hello }
} = resolvers

describe('Query resolvers', () => {
  it('says hello without input', () => {
    const res = hello(null, {})
    expect(res).toEqual('Hello World')
  })

  it('says hello when given a name', () => {
    const res = hello(null, { name: 'Graham' })
    expect(res).toEqual('Hello Graham')
  })
})
