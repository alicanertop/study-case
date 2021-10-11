import reducer, { initialState } from './index'

describe('manufacturer reducer', () => {
  it('should handle initial state', () => {
    expect(reducer(undefined, { type: 'unknown' })).toEqual(initialState)
  })
})
