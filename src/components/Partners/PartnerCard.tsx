import Button from '../Button/Button'
import './partnerCard.sass'

const PartnerCard = () => {
  return (
    <div className="partner-card">
        <div className="partner-shadow">
            <p className="partner-title">Parceiros</p>
            <p className="partner-text">Lorem ipsum dolor sit amet, consectetur</p>
            <Button classTitle='btn-partner' text='Confira' />
        </div>
    </div>
  )
}

export default PartnerCard