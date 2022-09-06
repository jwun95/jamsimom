import * as styles from './CheckBox.styles'
import * as tools from '../../assets/styles/tools'
import { useState } from 'react'

const CheckBox = ({ name, onClick, ...props }) => {
  const [active, setActvie] = useState(false)

  const handleClick = () => {
    setActvie(!active)
    onClick(!active)
  }

  return (
    <styles.CheckBox {...props}>
      <button onClick={handleClick}>
        <tools.CheckIcon className={active ? 'active' : ''} />
      </button>
      <span className="ml-3">{name}</span>
    </styles.CheckBox>
  )
}

export default CheckBox
