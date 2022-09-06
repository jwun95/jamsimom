import styled from '@emotion/styled'

export const Child = styled.button`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  padding: 1rem;
  width: 100%;
  border: 1px solid transparent;
  border-radius: 6px;
  flex-direction: column;

  & + & {
    margin-top: 1rem;
  }

  p {
    margin-left: 2rem;
  }
`

export const Notification = styled.ul`
margin-left: 3rem;
margin-top: 1rem;
  li {
    list-style: disc;
  }
`