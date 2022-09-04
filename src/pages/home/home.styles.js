import styled from '@emotion/styled'
import { Common } from '../../assets/styles/common'

export const Card = styled.div`
  border-radius: 4px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 1.5rem 0 1.5rem 0;
`

export const AccordionItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
`

export const AccordionItemImage = styled.div`
  width: 20%;

  img {
    margin: auto;
    width: 40px;
    height: 40px;
  }
`

export const SectionLeft = styled.div`
  width: 60%;
  display: inline-block;
  font-weight: bold;
  line-height: 26px;
`
