import BrandCard from './BrandCard'
import './brands.sass'
const Brands = () => {
  return (
    <section id="brands-container">
        <h2>Navegue por marcas</h2>
        <div className="brands-content">
            <BrandCard />
            <BrandCard />
            <BrandCard />
            <BrandCard />
            <BrandCard />
        </div>
    </section>
  )
}

export default Brands