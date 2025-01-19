
import Button from '../Button/Button'
import './promotions.sass'

const Promotions = () => {
  return (
    <section id="promotions-container">
        <div className="shadow">
            <h1>Venha conhecer nossas promoções</h1>
            <p className="text-product"><span>50% Off</span> nos produtos</p>
            <Button classTitle='btn-product' text='Ver produto'/>
        </div>
    </section>
  )
}

export default Promotions