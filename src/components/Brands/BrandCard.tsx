import Brand from '../../assets/img/BrandEConverse.png'


import './brandCard.sass'

const BrandCard = () => {
  return (
    <div className="brand-card">
        <img src={Brand} alt="Logo Marca" />
    </div>
  )
}

export default BrandCard