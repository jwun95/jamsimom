import * as styles from './Notification.styles'
import warning from '../../static/warning.svg'

const Notification = () => {
  return <styles.Image src={warning} alt="prediction-status"></styles.Image>
}

export default Notification
