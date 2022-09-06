import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'
import { Common } from './common'
import { BsCheckSquare } from 'react-icons/bs'

export const Divider = styled.div`
  border-top: 3px solid #f8f8f8;
`

export const Card = styled.div`
  padding: 1rem;
  margin-top: 1rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 8px;
`

export const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0;

  & > button + button {
    margin-left: 1rem;
  }
`

export const ColorSection = styled.section`
  background-color: ${Common.colors.primary_lighter};
  border-radius: 4px;
  padding: 1.5rem;
  align-items: center; // 플렉스를 주면 height 100%, aline-items주면 부모 height 무시
`

export const Input = styled.input`
  width: 100%;
  border: 1px solid lightgray;
  border-radius: 4px;
  margin-top: 0.6rem;
  height: 44px;
  padding: 1rem;
`

export const CheckIcon = styled(BsCheckSquare)`
  fill: lightgray;
  &.active {
    background-color: ${Common.colors.brown_light};
    fill: white;
  }
`

// Link Button
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

export const LinkButton = styled(Link)`
  ${({ outline }) =>
    outline ? outLine : noLine} // props로 들어와서 {}로 감싸야한다.
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  height: ${({ fullWidth }) => (fullWidth ? '3.2rem' : 'auto')};
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 8px 16px;
`
