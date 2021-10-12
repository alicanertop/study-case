import React from 'react'
import { AiFillShopping } from 'react-icons/ai'
import classnames from 'classnames'

import { basketReducer, useAppDispatch, useAppSelector } from '../../../redux'
import { Button } from '../../atoms'
import { IItem } from '../../../types'

import BasketItem from './BasketItem'
import './basket.scss'

function Basket() {
  const dispatch = useAppDispatch()
  const { itemList, totalPrice } = useAppSelector(({ basket }) => basket)
  const [active, toggle] = React.useState(false)

  const totalText = `₺ ${totalPrice}`

  const handleAdd = (item: IItem) => {
    dispatch(basketReducer.basketSlice.actions.add(item))
  }
  const handleRemove = (item: IItem) => {
    dispatch(basketReducer.basketSlice.actions.remove(item))
  }

  const handleBuy = () => {
    toggle(false)
    dispatch(basketReducer.basketSlice.actions.buy())
  }

  const handleClear = () => {
    toggle(false)
    dispatch(basketReducer.basketSlice.actions.clear())
  }

  return (
    <div
      className={classnames('basket', { active: active })}
      onClick={() => toggle((prev) => !prev)}>
      <div className="basket__showroom">
        <AiFillShopping className="basket-shop-icon" />
        <p className="basket-text">{totalText}</p>
      </div>

      <div className="basket__content" onClick={(e) => e.stopPropagation()}>
        <div className="basket__list">
          {itemList.length ? (
            itemList.map((item) => (
              <BasketItem onAdd={handleAdd} onRemove={handleRemove} item={item} />
            ))
          ) : (
            <div className="basket-empty">Basket is empty</div>
          )}

          {itemList.length ? (
            <div className="basket-button__container">
              <Button
                variant="primary"
                children="Clear"
                className="basket-button"
                onClick={handleClear}
              />
              <Button
                variant="ghost"
                className="basket-button"
                onClick={handleBuy}
                children={totalText}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default Basket
