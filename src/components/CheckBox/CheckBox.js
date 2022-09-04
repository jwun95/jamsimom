import * as styles from './CheckBox.styles'
import { BsCheckSquare } from 'react-icons/bs'
import { useState } from 'react'

const CheckBox = ({ name, ...props }) => {
  const [active, setActvie] = useState(false)

  const handleClick = () => {
    setActvie(!active)
  }

  return (
    <styles.CheckBox {...props}>
      <BsCheckSquare
        onClick={() => handleClick}
        className={active ? 'active' : ''}
      />
      <span className="ml-3">{name}</span>
    </styles.CheckBox>
  )
}

export default CheckBox
