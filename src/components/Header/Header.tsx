import ShieldCheck from '../../assets/img/icons/ShieldCheck.svg'
import Truck from '../../assets/img/icons/Truck.svg'
import CreditCard from '../../assets/img/icons/CreditCard.svg'
import Logo from '../../assets/img/Logo.svg'
import Group from '../../assets/img/icons/Group.svg'
import Heart from '../../assets/img/icons/Heart.svg'
import UserCircle from '../../assets/img/icons/UserCircle.svg'
import ShoppingCart from '../../assets/img/icons/ShoppingCart.svg'
import MagnifyingGlass from '../../assets/img/icons/MagnifyingGlass.svg'

import './header.sass'
import Nav from './Nav'


const Header = () => {
  return (
    <header className='header-container'>
        <div className="header-top">
            <div className="header-top-1">
                <img src={ShieldCheck} alt="ícone compra segura" />
                <p>Compra <span className='highlight'>100% segura</span></p>
            </div>
            <div className="header-top-2">
                <img src={Truck} alt="ícone frete" />
                <p><span className='highlight'>Frete grátis</span> acima de R$ 200</p>
            </div>
            <div className="header-top-3">
                <img src={CreditCard} alt="ícone cartão de crédito" />
                <p><span className='highlight'>Parcele </span>suas compras</p>
            </div>
        </div>
        <div className="header-content">
            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="search">
                <input className='search-txt' type="text" placeholder='o que você está buscando?' />
                <img src={MagnifyingGlass} alt="Ícone Busca" />
            </div>
            <div className="icons">
                <img src={Group} alt="ícone pedidos" />
                <img src={Heart} alt="ícone favoritos" />
                <img src={UserCircle} alt="ícone usuário" />
                <img src={ShoppingCart} alt="ícone carrinho de compras" />
            </div>
        </div>
        <Nav />
    </header>
  )
}

export default Header