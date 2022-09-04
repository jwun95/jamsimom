import styled from '@emotion/styled'
import { Common } from '../../assets/styles/common'

export const CheckBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;

  svg {
    fill: lightgray;
  }

  &.active {
    svg {
      fill: ${Common.colors.brown_light};
    }
  }
`
