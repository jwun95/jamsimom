import * as styles from './Button.styles'
import { useNavigate } from 'react-router-dom'

const Button = ({
  fullWidth = false,
  outline = false,
  onClick,
  url = false,
  params = {},
  children,
  ...props
}) => {
  const navigate = useNavigate()

  const handle = {
    goPage: (url) => {
      navigate(url, { state: params })
    },
  }

  return (
    <styles.Button
      fullWidth={fullWidth}
      outline={outline}
      onClick={() => (url ? handle.goPage(url) : onClick())}
      {...props}
    >
      <span>{children}</span>
    </styles.Button>
  )
}

export default Button
