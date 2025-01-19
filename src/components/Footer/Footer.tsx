import Logo from '../../assets/img/BrandEConverse.png'
import Instagram from '../../assets/img/icons/instagram.png'
import Facebook from '../../assets/img/icons/facebook.png'
import Linkedin from '../../assets/img/icons/linkedin.png'

import './footer.sass'

const Footer = () => {
  return (
    <footer id="footer-container">
        <div className="footer-links">
            <div className="social-networks">
                <img className='footer-logo' src={Logo} alt="Logo" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className="social-network-icons">
                    <img src={Instagram} alt="Ícone Instagram" />
                    <img src={Facebook} alt="Ícone Facebook" />
                    <img src={Linkedin} alt="Ícone Linkedin" />
                </div>
            </div>
            <div className="links">
                <div className="links-card">
                    <p className="card-title">Institucional</p>
                    <ul>
                        <li><a href="#">Sobre Nós</a></li>
                        <li><a href="#">Movimento</a></li>
                        <li><a href="#">Trabalhe conosco</a></li>
                    </ul>
                </div>
                <div className="links-card">
                    <p className="card-title">Ajuda</p>
                    <ul>
                        <li><a href="#">Suporte</a></li>
                        <li><a href="#">Fale Conosco</a></li>
                        <li><a href="#">Perguntas Frequentes</a></li>
                    </ul>
                </div>
                <div className="links-card">
                    <p className="card-title">Termos</p>
                    <ul>
                        <li><a href="#">Termos e Condições</a></li>
                        <li><a href="#">Política de Privacidade</a></li>
                        <li><a href="#">Troca e Devolução</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="footer-copyright">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    </footer>
  )
}

export default Footer