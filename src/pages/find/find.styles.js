import styled from '@emotion/styled'
import { Common } from '../../assets/styles/common'
import { Link } from 'react-router-dom'

export const TimeInput = styled.input`
  width: 40px;
  height: 36px;
  border: 1px solid lightgray;
  border-radius: 4px;
  text-align: center;
  margin-right: 6px;
`

export const TimeSelector = styled.button`
  width: 40px;
  height: 36px;
  font-weight: bold;
  background-color: ${Common.colors.primary_lighter};
  border: 1px solid ${Common.colors.primary_light};
  border-radius: 4px;
  margin-right: 6px;
`

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