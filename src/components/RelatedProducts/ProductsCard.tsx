
import { ProductProps } from '../../types/products'
import Button from '../Button/Button';
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
        <Button classTitle='btn-product-buy' text='Comprar' onClick={() => onBuyClick({ productName, descriptionShort, photo, price })}/>
    </div>
  )
}

export default ProductsCard