import reducer, { initialState } from './index'

describe('itemTypes reducer', () => {
  it('should handle initial state', () => {
    expect(reducer(undefined, { type: 'unknown' })).toEqual(initialState)
  })
})
