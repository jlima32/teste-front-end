import Button from '../Button/Button'
import './newsletter.sass'

const Newsletter = () => {
  return (
    <div id="newsletter-container">
        <div className="newsletter-left">
            <h3>Inscreva-se na nossa newsletter</h3>
            <p>Assine a nossa newsletter e receba as novidades de conteúdos exclusivos da Econverse.</p>
        </div>
        <div className="newsletter-right">
            <div className="newsletter-form-group">
                <input type="text" name='name' className='newsletter-input' placeholder='Digite seu nome' />
                <input type="text" name='email' className='newsletter-input' placeholder='Digite seu email' />
                <Button classTitle='newsletter-btn-submit' text='Inscrever'/>
            </div>
            <div className="newsletter-terms">
                <input type="checkbox" name='subscribe' id='subscribeNews' />
                <label htmlFor="subscribeNews">Aceito os termos e condições</label>
            </div>
        </div>
    </div>
  )
}

export default Newsletter