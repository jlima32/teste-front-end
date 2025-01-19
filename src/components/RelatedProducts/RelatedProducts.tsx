import { useEffect, useState, useRef } from 'react'
import ArrowLeft from '../../assets/img/icons/ArrowLeft.png'
import ArrowRight from '../../assets/img/icons/ArrowRight.png'
import LinkAllProducts from './LinkAllProducts'
import Modal from './Modal'
import Nav from './Nav'

import { ProductProps } from '../../types/products'

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

const carousel = useRef(null);

  const handleLeftClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }
  
  const handleRightClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

  return (
    <section className="related-products-container">
      
      <div className="related-products-header">
        <div className="border left"></div>
        <h2>Produtos relacionados {showNav}</h2>
        <div className="border right"></div>
      </div>
      {showNav ? <Nav /> : <LinkAllProducts />}
      <div className="products-container">
        <div className="products-arrow" onClick={handleLeftClick}>
            <img src={ArrowLeft} alt='Ícone Seta Esquerda' />
        </div>
        <div className="products-carousel" ref={carousel}>
          {products.map((product) => (
            <ProductsCard key={product.productName} {...product} />
          ))}
        </div>
        <div className="products-arrow" onClick={handleRightClick}>
            <img src={ArrowRight} alt='Ícone Seta Direita' />
        </div>
      </div>
      
      
    </section>
    
  )
}

export default RelatedProducts