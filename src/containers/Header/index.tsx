import market from '../../assets/img/market.svg'
import { Basket } from '../../components/organisms'

import './header.scss'

function Header() {
  return (
    <div className="header">
      <img src={market} alt="logo" />
      <Basket />
    </div>
  )
}

export default Header
