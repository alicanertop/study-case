import { IItem } from '../../types'
import { IBasketItem } from './index'

export function calculationBasket(itemList: IBasketItem[] = [], item: IItem, isAdd: boolean) {
  const index = itemList.findIndex((d) => d.id === item.id)
  if (index > -1) {
    const basketItem = itemList[index]
    basketItem.count = isAdd ? basketItem.count + 1 : basketItem.count - 1
    basketItem.totalPrice = Number((basketItem.count * basketItem.price).toFixed(2))
    if (basketItem.count) itemList[index] = basketItem
    else itemList.splice(index, 1)
  } else {
    if (isAdd) itemList.push({ ...item, count: 1, totalPrice: item.price })
  }

  const totalPrice = Number(
    itemList.reduce((prev, current) => prev + current.totalPrice, 0).toFixed(2),
  )
  return { itemList, totalPrice }
}
