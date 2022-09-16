import styled from '@emotion/styled'
import { ITagProps } from './Tag'

interface styledProps extends ITagProps {

}

export const Tag = styled.button<styledProps>`
  font-size: ${({ fontSize }) => fontSize};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? `${backgroundColor}` : 'white'};
  border-radius: 9999px;
  border: ${({ borderColor }) =>
    borderColor
      ? `1px solid ${borderColor}`
      : `1px solid transparent`}; // border none이라서 border-box가 사라짐
  padding: 4px 12px;

  span {
    margin: auto;
  }

  &:hover {
    background-color: ${({ hoverOption }) =>
      hoverOption ? hoverOption.backgroundColor : null};
    border: ${({ hoverOption }) =>
      hoverOption ? `1px solid ${hoverOption.borderColor}` : null};
    font-weight: ${({ hoverOption }) => (hoverOption ? 'bold' : null)};
  }

  &.selected {
    background-color: ${({ hoverOption }) =>
      hoverOption ? hoverOption.backgroundColor : null};
    border: ${({ hoverOption }) =>
      hoverOption ? `1px solid ${hoverOption.borderColor}` : null};
    font-weight: ${({ hoverOption }) => (hoverOption ? 'bold' : null)};
  }
`
