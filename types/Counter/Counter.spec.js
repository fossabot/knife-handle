/* global describe it expect */
import { resolvers } from '../Counter'

const {
  Counter: { countStr }
} = resolvers

describe('Counter resolvers', () => {
  it('describes the current count', () => {
    const count = Math.floor(Math.random() / Math.random())
    const message = countStr({ count })
    expect(message).toEqual(`Current count: ${count}`)
  })
})
