import * as styles from './Tag.styles'
import React from 'react'

export interface ITagProps {
  fontSize?: string
  backgroundColor?: string | null
  borderColor?: string | null
  children: React.ReactNode
  hoverOption?: {
    backgroundColor: string
    borderColor: string
  } | null
  selected?: boolean
  onClick?: () => void
  disabled?: boolean
}

const Tag = ({
  fontSize = '1rem',
  backgroundColor = null,
  borderColor = null,
  children,
  hoverOption = null,
  onClick,
  selected,
  ...props
}: ITagProps) => {
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
