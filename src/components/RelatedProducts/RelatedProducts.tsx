import { useEffect, useState } from 'react'
import ArrowLeft from '../../assets/img/icons/ArrowLeft.png'
import ArrowRight from '../../assets/img/icons/ArrowRight.png'
import LinkAllProducts from './LinkAllProducts'
import Modal from './Modal'
import Nav from './Nav'

import { ProductProps } from '../../types/products'

import ProductsArrow from "./ProductsArrow"
import ProductsCard from './ProductsCard'

import './relatedProducts.sass'

const RelatedProducts = ({ showNav }: { showNav: boolean} ) => {
  
  const [products, setProducts] = useState<ProductProps[]>([]);
  const apiUrl = '/api/produtos.json';

  useEffect(() => {
    fetch(apiUrl)
    .then(res => res.json())
    .then((data) => setProducts(data.products))
}, []);



  return (
    <section className="related-products-container">
      
      <div className="related-products-header">
        <div className="border left"></div>
        <h2>Produtos relacionados {showNav}</h2>
        <div className="border right"></div>
      </div>
      {showNav ? <Nav /> : <LinkAllProducts />}
      <div className="products-container">
        <ProductsArrow img={ArrowLeft} alt="Icone seta esquerda"/>
        {products.map((product) => (
          <ProductsCard key={product.productName} {...product} />
        ))}
        <ProductsArrow img={ArrowRight} alt="Icone seta direita"/>
      </div>
      
      
    </section>
    
  )
}

export default RelatedProducts