import './modal.sass'

import Close from '../../assets/img/icons/Close.png'
import Minus from '../../assets/img/icons/Minus.png'
import Plus from '../../assets/img/icons/Plus.png'

import { ProductProps } from '../../types/products';
import { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: ProductProps;
}

const Modal = ({ isOpen, onClose, product }: ModalProps) => {

  const [count, setCount] = useState(1)


  if (!isOpen) return null;

  return (
    <div className="modal-background">
      <div id="modal-container">
        <div className="modal-header">
          <div className="modal-close">
            <img src={Close} alt="Ícone Fechar" onClick={onClose} />
          </div>
        </div>
        <div className="modal-content">
          <img src={product.photo} alt={product.productName} />
          <div className="modal-product-info">
            <p className='modal-product-title'>{product.productName}</p>
            <p className='modal-product-price'>R$ {product.price.toFixed(2)}</p>
            <div className="modal-product-description">
              <p className='product-description-text'>{product.descriptionShort}</p>
              <a href="#" className='product-link'>Veja mais detalhes do produto {'>'}</a>
            </div>
            <div className="modal-product-quantity-buy">
              <div className="quantity">
                <img className='minus' src={Minus} alt="Ícone subtrair" onClick={() => {count > 1 ? setCount((count) => count - 1) : '' }} />
                <p className='count' >{count}</p>
                <img className='plus' src={Plus} alt="Ícone somar" onClick={() => setCount((count) => count + 1)} />
                
                
              </div>
              <div className="modal-btn-buy">
                Comprar
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal