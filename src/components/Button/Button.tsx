import { ButtonProps } from '../../types/buttonProps'

import './button.sass'

const Button = ({ classTitle, text, onClick }: ButtonProps ) => {
  return (
    <button className={`btn ${classTitle}`} onClick={onClick}>
        {text}
    </button>
  )
}

export default Button