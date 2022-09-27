import styled from '@emotion/styled'
import { Common } from '../../assets/styles/common'
import { Link } from 'react-router-dom'

export const FindButton = styled(Link)`
  width: 100%;
  background-color: ${Common.colors.primary};
  margin-top: 3rem;
  padding: 1rem;
  border-radius: 8px;
  font-weight: bold;
  display: block;
  text-align: center;
`