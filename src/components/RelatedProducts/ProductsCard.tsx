import Iphone from '../../assets/img/iPhone.png'

import './productsCard.sass'

const ProductsCard = () => {
  return (
    <div className="product-card">
        <img src={Iphone} alt="Imagem iPhone" />
        <p className="product-title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p className="product-price-old">R$ 30,90</p>
        <p className="product-price-new">R$ 28,90</p>
        <p className="product-price-opt">ou 2x de R$ 49,95 sem juros</p>
        <p className="product-price-ship">Frete grátis</p>
        <div className="btn-product-buy">
            Comprar
        </div>
    </div>
  )
}

export default ProductsCard