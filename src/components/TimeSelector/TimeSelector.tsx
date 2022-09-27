// Base
import * as styles from './TimeSelector.styles'
import {debounce} from '../../utils/debounce'
import React from 'react'

export function TimeSelector({ onGetTime, className, ...props }: {onGetTime: (e:Function) => void, className?: string}) {

  const handleDebounce = debounce((e) => onGetTime(e), 500)

  const handleChange = (e:React.FormEvent<HTMLInputElement>) => {
    handleDebounce(e)
  }

  return (
    <div {...props}>
      <styles.TimeInput
        type="text"
        name="hour"
        defaultValue=""
        aria-label="hour"
        onChange={(e)=>handleChange(e)}
      />
      <span className="mr-6 font-bold">시부터</span>
      <styles.TimeInput
        type="text"
        defaultValue=""
        name="duration"
        aria-label="duration"
        onChange={(e)=>handleChange(e)}
      />
      <span>시간</span>
    </div>
  )
}

export default TimeSelector
