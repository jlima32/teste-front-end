import ArrowLeft from '../../assets/img/icons/ArrowLeft.png'
import ArrowRight from '../../assets/img/icons/ArrowRight.png'
import LinkAllProducts from './LinkAllProducts'
import Modal from './Modal'
import Nav from './Nav'


import ProductsArrow from "./ProductsArrow"
import ProductsCard from './ProductsCard'

import './relatedProducts.sass'

const RelatedProducts = ({ showNav }: { showNav: boolean} ) => {
  return (
    <section className="related-products-container">
      <Modal />
      <div className="related-products-header">
        <div className="border left"></div>
        <h2>Produtos relacionados {showNav}</h2>
        <div className="border right"></div>
      </div>
      {showNav ? <Nav /> : <LinkAllProducts />}
      <div className="products-container">
        <ProductsArrow img={ArrowLeft} alt="Icone seta esquerda"/>
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsArrow img={ArrowRight} alt="Icone seta direita"/>
      </div>
    </section>
  )
}

export default RelatedProducts