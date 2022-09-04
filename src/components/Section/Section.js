import * as styles from './Section.styles'
import { IoIosArrowForward } from 'react-icons/io'

const Section = ({
  children,
  subtitle = '',
  add = false,
  required = false,
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
          <button onClick={props.onClick}>
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
