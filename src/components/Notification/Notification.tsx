import * as styles from './Notification.styles'
import warning from '../../static/warning.svg'
import React from 'react'

const Notification = ({className}: {className?:string}) => {
  return <styles.Image src={warning} alt="prediction-status"></styles.Image>
}

export default Notification
