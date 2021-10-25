import market from '../../assets/img/market.svg'
import { Basket } from '../../components/organisms'

import './header.scss'

function Header() {
  return (
    <div className="header">
      <div className="header__content">
        <img src={market} alt="logo" />
        <Basket />
      </div>
    </div>
  )
}

export default Header
