import * as styles from './CheckCard.styles'
import * as tools from '../../assets/styles/tools'
import { useEffect, useState } from 'react'
import React from 'react'

interface ICheckCardProps {
  child: ChildProps
  idx: number
  onClick: (e:boolean, id:number) => void
  checked: boolean
}

type ChildProps = {
  id: number
  name: string
  sex: string
  age: number
}

const CheckCard = ({ child, idx, onClick, checked, ...props }:ICheckCardProps) => {
  const [state, setState] = useState(false)

  const handleClick = () => {
    setState(!state)
    onClick(!state, child.id)
  }

  useEffect(() => {
    if (checked) {
      setState(true)
    } else {
      setState(false)
    }
  }, [checked])

  return (
    <styles.Child
      onClick={handleClick}
      {...props}
      className={state ? 'active' : ''}
    >
      <div>
        <tools.CheckIcon
          className={'inline-block ' + (state ? 'active' : '')}
        />
        <span className="ml-4 font-bold">{child.name}</span>
        <span className="ml-4">
          {child.sex} / {child.age}살
        </span>
      </div>
      <p className="mt-3 font-bold">특이사항</p>
      <styles.Notification>
        <li>땅콩알러지 있음</li>
      </styles.Notification>
    </styles.Child>
  )
}

export default CheckCard
