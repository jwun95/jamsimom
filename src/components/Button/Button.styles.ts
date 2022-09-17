import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Common } from '../../assets/styles/common'
import {IButtonProps} from './Button'

interface styledProps extends IButtonProps {

}

const outLine = css`
  border: 1px solid ${Common.colors.primary};
  background-color: white;

  &:hover {
    background-color: ${Common.colors.primary_light};
  }
`

const noLine = css`
  background-color: ${Common.colors.primary};

  &:hover {
    background-color: ${Common.colors.primary_darker};
  }
`

export const Button = styled.button<styledProps>`
  ${({ outline }) =>
    outline ? outLine : noLine} // props로 들어와서 {}로 감싸야한다.
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  height: ${({fullWidth}) => (fullWidth? '3.2rem': 'auto')};
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 8px 16px;
`
