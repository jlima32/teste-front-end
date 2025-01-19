
import { ProductProps } from '../../types/products'
import './productsCard.sass'

interface ProductsCardProps extends ProductProps{
  onBuyClick: (product: ProductProps) => void;
}

const ProductsCard = ({ productName, photo, price, descriptionShort, onBuyClick}: ProductsCardProps) => {
  return (
    <div className="product-card">
        <img src={photo} alt={`Imagen de ${productName}`} />
        <p className="product-title">{productName}</p>
        <p className="product-price-old">R$ {(price * 1.065).toFixed(2)}</p>
        <p className="product-price-new">R$ {price.toFixed(2)}</p>
        <p className="product-price-opt">ou 2x de R$ {(price / 2).toFixed(2)} sem juros</p>
        <p className="product-price-ship">Frete grátis</p>
        <div className="btn-product-buy" onClick={() => onBuyClick({ productName, descriptionShort, photo, price })}>
            Comprar
        </div>
    </div>
  )
}

export default ProductsCard