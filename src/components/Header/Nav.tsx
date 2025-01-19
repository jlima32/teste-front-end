import './nav.sass'

const Nav = () => {
  return (
    <nav id="nav-container">
            <div className="nav-links">
                <ul>
                    <li><a href="#">Todas Categorias</a></li>
                    <li><a href="#">Supermercado</a></li>
                    <li><a href="#">Livros</a></li>
                    <li><a href="#">Moda</a></li>
                    <li><a href="#">Lançamentos</a></li>
                    <li className='active'><a href="#">Ofertas do dia</a></li>
                    <li><a href="#">Assinatura</a></li>
                </ul>
            </div>
        </nav>
  )
}

export default Nav