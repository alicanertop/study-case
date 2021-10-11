import './Home.scss'

import { BrandFilter, Sorting, TagFilter, ProductList } from '../../components/organisms'
import { Footer, Header } from '../../containers'

function Home() {
  return (
    <>
      <Header />
      <div className="home-content">
        <div className="home-filter">
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
