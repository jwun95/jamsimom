import styled from '@emotion/styled'

export const Section = styled.section`
  text-align: center;

  svg {
    margin: 4rem auto 4rem auto;
    font-size: 5rem;
  }
`

export const Info = styled.div`
    font-size: 0.875rem;
    display: flex;
    justify-content: space-between;
    padding: 0.4rem 1rem;

& > span + span {
    font-weight: bold;
}
`
