import * as styles from './Tag.styles'

const Tag = ({ fontSize = '1rem', isColor = true, children, ...props }) => {
  return (
    <styles.Tag fontSize={fontSize} isColor={isColor} {...props}>
      {children}
    </styles.Tag>
  )
}

export default Tag
