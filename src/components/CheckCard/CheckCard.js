import * as styles from './CheckCard.styles'
import * as tools from '../../assets/styles/tools'
import { useState } from 'react'

const CheckCard = ({ child, idx, onClick, ...props }) => {
  const [state, setState] = useState(false)

  const handleClick = () => {
    setState(!state)
    onClick(!state, idx)
  }

  return (
    <styles.Child onClick={handleClick} {...props}>
      <div>
        <tools.CheckIcon className={'inline-block ' + (state ? 'active' : '')} />
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
