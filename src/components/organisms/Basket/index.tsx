import { AiFillShopping } from 'react-icons/ai'
import BasketItem from './BasketItem'
import './basket.scss'

function Basket() {
  return (
    <div className="basket active">
      <AiFillShopping className="shop-icon" />
      <p className="basket__text">₺ 39,97</p>

      <div className="basket__content">
        <div className="basket__list">
          <BasketItem />
        </div>
      </div>
    </div>
  )
}

export default Basket
