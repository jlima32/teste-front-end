import IconTech from '../../assets/img/icons/IconTech.svg'
import IconMarket from '../../assets/img/icons/IconMarket.svg'
import IconWhiskey from '../../assets/img/icons/IconWhiskey.svg'
import IconTools from '../../assets/img/icons/IconTools.svg'
import IconHealth from '../../assets/img/icons/IconHealth.svg'
import IconSports from '../../assets/img/icons/IconSports.svg'
import IconFashion from '../../assets/img/icons/IconFashion.svg'
import './categories.sass'

const Categories = () => {
  return (
    <section id="categories-container">
        <div className="category-card">
            <div className="category-img active-icon">
                <img src={IconTech} alt="ícone tecnologia" />
            </div>
            <p className='active-text'>Tecnologia</p>
        </div>
        <div className="category-card">
            <div className="category-img">
                <img className='hover' src={IconMarket} alt="ícone supermercado" />
            </div>
            <p>Supermercado</p>
        </div>
        <div className="category-card">
            <div className="category-img">
                <img className='hover' src={IconWhiskey} alt="ícone bebidas" />
            </div>
            <p>Bebidas</p>
        </div>
        <div className="category-card">
            <div className="category-img">
                <img className='hover' src={IconTools} alt="ícone ferramentas" />
            </div>
            <p>Ferramentas</p>
        </div>
        <div className="category-card">
            <div className="category-img">
                <img className='hover' src={IconHealth} alt="ícone saúde" />
            </div>
            <p>Saúde</p>
        </div>
        <div className="category-card">
            <div className="category-img">
                <img className='hover' src={IconSports} alt="ícone esportes e fitness" />
            </div>
            <p>Esportes e Fitness</p>
        </div>
        <div className="category-card">
            <div className="category-img">
                <img className='hover' src={IconFashion} alt="ícone moda" />
            </div>
            <p>Moda</p>
        </div>
    </section>
  )
}

export default Categories