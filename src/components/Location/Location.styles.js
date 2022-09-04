import styled from '@emotion/styled'
import { Common } from '../../assets/styles/common'

export const LocationImageWrapper = styled.div`
  margin-top: 1rem;
  width: 100%;

  img {
    width: 100%;
  }
`

export const LocationWrapper = styled.div`

    & > span {
        color: ${Common.colors.brown};
    }
`