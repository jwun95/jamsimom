import styled from '@emotion/styled'
import { Common } from '../../assets/styles/common'

export const Section = styled.section`
  margin: 0rem 0 3rem 0;
`

export const SubTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-weight: bold;
  padding: 14px 0 14px 0;

  span {
    font-size: 1.2rem;
  }

  button {
    svg {
      font-size: 1.2rem;
      margin-bottom: 3px;
    }
  }
`

export const Required = styled.span`
  color: ${Common.colors.brown_light};
`
