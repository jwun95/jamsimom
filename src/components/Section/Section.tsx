import * as styles from './Section.styles'
import { IoIosArrowForward } from 'react-icons/io'
import React, { ReactNode } from 'react'

interface ISectionProps {
  subtitle: string
  add: boolean
  required: boolean
  onClick: () => void
  children: ReactNode
}

const Section:React.FC<ISectionProps> = ({
  children,
  subtitle = '',
  add = false,
  required = false,
  onClick,
  ...props
}) => {
  return (
    <styles.Section>
      <styles.SubTitle {...props}>
        <span>
          {subtitle}
          {required ? <styles.Required> *</styles.Required> : null}
        </span>
        {add ? (
          <button onClick={onClick}>
            더보기
            <IoIosArrowForward className="inline-block" />
          </button>
        ) : null}
      </styles.SubTitle>
      {children}
    </styles.Section>
  )
}

export default Section
