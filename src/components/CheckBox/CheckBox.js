import * as styles from './CheckBox.styles'
import * as tools from '../../assets/styles/tools'
import { useState, useEffect } from 'react'

const CheckBox = ({ name, onClick, allChecked, ...props }) => {
  const [active, setActvie] = useState(false)

  useEffect(() => {
    if (!allChecked) {
      setActvie(false)
    } else {
      setActvie(true)
    }
  }, [allChecked])

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
