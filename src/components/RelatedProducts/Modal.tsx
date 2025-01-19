import './modal.sass'

import Close from '../../assets/img/icons/Close.png'
import Iphone from '../../assets/img/iPhone.png'


const Modal = () => {
  return (
    <div className="modal-background">
      <div id="modal-container">
        <div className="modal-header">
          <div className="modal-close">
            <img src={Close} alt="Ícone Fechar" />
          </div>
        </div>
        <div className="modal-content">
          <img src={Iphone} alt="Imagem iPhone" />
          <div className="modal-product-info">
            <p className='modal-product-title'>Lorem ipsum dolor sit amet</p>
            <p className='modal-product-price'>R$ 1.499,90</p>
            <div className="modal-product-description">
              <p>Many desktop publishing packages and web page editors now many desktop publishing</p>
              <a href="#">Veja mais detalhes do produto {'>'}</a>
            </div>
            <div className="modal-product-quantity-buy">
              <div className="quantity">
                01
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