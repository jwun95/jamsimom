import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Common } from '../../assets/styles/common'



export const Tag = styled.button`
  font-size: ${({ fontSize }) => fontSize};
  background-color: ${({ isColor }) =>
    isColor ? `${Common.colors.primary_lighter}` : 'white'};
  border-radius: 9999px;
  border: ${({ isColor }) =>
    isColor
      ? `1px solid transparent`
      : '1px solid lightgrey'}; // border none이라서 border-box가 사라짐
  padding: 4px 12px;

  span {
    margin: auto;
  }
`
