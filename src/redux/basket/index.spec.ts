import reducer, { initialState } from './index'
import { calculationBasket } from './helpers'

describe('basket reducer', () => {
  const item = {
    added: 1485723766805,
    description:
      'enim corporis voluptatibus laudantium possimus alias dolorem voluptatem similique aut aliquam voluptatem voluptatem omnis id consequatur',
    id: 'c186ed00-6f61-4db0-867c-905329c3f316',
    itemType: 'mug',
    manufacturer: 'OHara-Group',
    name: 'Handcrafted Trees Mug',
    price: 10.99,
    slug: 'Handcrafted-Trees-Mug',
    tags: ['Trees'],
  }

  it('should handle initial state', () => {
    expect(reducer(undefined, { type: 'unknown' })).toEqual(initialState)
  })

  it('should calculate single item', () => {
    expect(calculationBasket([], item, true)).toEqual({
      itemList: [{ ...item, count: 1, totalPrice: item.price }],
      totalPrice: item.price,
    })
  })

  it('should calculate double item', () => {
    expect(calculationBasket([{ ...item, count: 1, totalPrice: item.price }], item, true)).toEqual({
      itemList: [{ ...item, count: 2, totalPrice: item.price * 2 }],
      totalPrice: item.price * 2,
    })
  })

  //More can go
})
