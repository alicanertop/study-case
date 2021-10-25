import React from 'react'
import classnames from 'classnames'

import { BrandFilter, Sorting, TagFilter, ProductList } from '../../components/organisms'
import { Footer, Header } from '../../containers'

import Close from '../../assets/img/close.svg'
import RightArrow from '../../assets/img/right-arrow.svg'

import './Home.scss'

function Home() {
  const [active, toggleActive] = React.useState(false)
  const handleToggle = () => toggleActive((prev) => !prev)
  return (
    <>
      <Header />
      <div className="home-content">
        <div className={classnames('home-filter', { active })}>
          <div className={classnames('button__container', { active })}>
            <button className="button" onClick={handleToggle}>
              <img className="icon" src={active ? Close : RightArrow} />
            </button>
          </div>
          <Sorting />
          <BrandFilter />
          <TagFilter />
        </div>
        <div className="home-product-list">
          <ProductList />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
