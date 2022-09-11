import * as styles from './Tag.styles'

const Tag = ({
  fontSize = '1rem',
  backgroundColor = null,
  borderColor = null,
  children,
  hoverOption=null,
  onClick,
  selected,
  ...props
}) => {
  return (
    <styles.Tag
      onClick={onClick}
      fontSize={fontSize}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      hoverOption={hoverOption}
      {...props}
    >
      {children}
    </styles.Tag>
  )
}

export default Tag
