import * as styles from './Button.styles'
import { useNavigate } from 'react-router-dom'
import {ReactNode} from 'react'
import React from 'react'

export interface IButtonProps {
  fullWidth?: boolean
  outline?: boolean
  onClick?: () => void
  url?: string | null
  params?: Object
  children: ReactNode
}

const Button = ({
  fullWidth = false,
  outline = false,
  onClick,
  url = null,
  params = {},
  children,
  ...props
}: IButtonProps) => {
  const navigate = useNavigate()

  const handle = {
    goPage: (url: string) => {
      navigate(url, { state: params })
    },
  }

  return (
    <styles.Button
      fullWidth={fullWidth}
      outline={outline}
      onClick={() => (url ? handle.goPage(url) : onClick)}
      {...props}
    >
      <span>{children}</span>
    </styles.Button>
  )
}

export default Button
