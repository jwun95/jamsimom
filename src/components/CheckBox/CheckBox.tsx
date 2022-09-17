import * as styles from './CheckBox.styles'
import * as tools from '../../assets/styles/tools'
import React, { useState, useEffect } from 'react'


interface ICheckBoxProps {
  name: string
  onClick: (e: boolean) => void
  allChecked: boolean
}

const CheckBox = ({ name, onClick, allChecked, ...props }: ICheckBoxProps) => {
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
