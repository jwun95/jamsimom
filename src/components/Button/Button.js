import * as styles from './Button.styles'

const Button = ({ fullWidth = false, outline = false, onClick, children, ...props }) => {

  return (
    <styles.Button
      fullWidth={fullWidth}
      outline={outline}
      onClick={onClick}
      {...props}
    >
      <span>{children}</span>
    </styles.Button>
  )
}

export default Button
