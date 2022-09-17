import * as styles from './OptionList.styles'
import Tag from '../Tag/Tag'
import React from 'react'

type TimeProps = {
  hour: number
  duration: number
  dayType: string
}

type OptionProps = {
  selection: string[]
  location: string
  date: string
  time: TimeProps
}

const computedTime = (time:TimeProps) => {
  let result
  if (time.hour + time.duration > 12 && time.hour < 12) {
    const calculation = time.hour + time.duration - 12
    result =
      time.dayType === '오전'
        ? time.dayType + ' ' + time.hour + '시-오후' + calculation + '시'
        : time.dayType + ' ' + time.hour + '시-오전' + calculation + '시'
  }
  result =
    time.dayType +
    ' ' +
    time.hour +
    '시-' +
    time.dayType +
    (time.hour + time.duration - 12) +
    '시'

  return result
}

const OptionList = ({ option, ...props }:{option: OptionProps}) => {
  const timeInfo = computedTime(option.time)

  return (
    <styles.OptionList {...props}>
      <styles.Option>
        <span>아이</span>
        <Tag disabled borderColor="lightgray">
          {option.selection.length}명
        </Tag>
      </styles.Option>
      <styles.Option>
        <span>주소</span>
        <Tag disabled borderColor="lightgray">
          {option.location}
        </Tag>
      </styles.Option>
      <styles.Option>
        <span>날짜</span>
        <Tag disabled borderColor="lightgray">
          {option.date}
        </Tag>
        <span className="ml-3">시간</span>
        <Tag disabled borderColor="lightgray">
          {timeInfo}
        </Tag>
      </styles.Option>
    </styles.OptionList>
  )
}

export default OptionList
