// Base
import * as styles from './TimeSelector.styles'
import debounce from '../../utils/debounce'

const TimeSelector = ({ onGetTime, ...props }) => {

  const handleDebounce = debounce((e) => onGetTime(e), 500)

  const handleChange = (e) => {
    handleDebounce(e)
  }

  return (
    <div {...props}>
      <styles.TimeInput
        type="text"
        name="hour"
        defaultValue=""
        aria-label="hour"
        onChange={handleChange}
      />
      <span className="mr-6 font-bold">시부터</span>
      <styles.TimeInput
        type="text"
        defaultValue=""
        name="duration"
        aria-label="duration"
        onChange={handleChange}
      />
      <span>시간</span>
    </div>
  )
}

export default TimeSelector
