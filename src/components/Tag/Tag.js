import * as styles from './Tag.styles'

const Tag = ({ small = false, isColor = true, children, ...props }) => {
  return (
    <styles.Tag small={small} isColor={isColor} {...props}>
      {children}
    </styles.Tag>
  )
}

export default Tag
