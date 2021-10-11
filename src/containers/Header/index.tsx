import market from '../../assets/img/market.svg'

import './header.scss'

function Header() {
  return (
    <div className="header">
      <img src={market} alt="logo" />
    </div>
  )
}

export default Header
