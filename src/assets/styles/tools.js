import styled from '@emotion/styled'
import { Common } from './common'

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

export const SearchButton = styled.button`
  width: 100%;
  border: 2px solid lightgrey;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  font-weight: bold;
  padding: 8px;

  &:hover {
    border: 2px solid ${Common.colors.primary};
  }
`

export const Input = styled.input`
  width: 100%;
  border: 1px solid lightgray;
  border-radius: 4px;
  margin-top: 0.6rem;
  height: 44px;
  padding: 1rem;
`