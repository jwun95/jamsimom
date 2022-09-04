/* global kakao */
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { Common } from '../../assets/styles/common'

export const HeaderWrapper = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  background-color: white;
  max-width: 440px;
  min-width: 320px;
  width: 100%;
  height: 60px;
  margin: auto;
  top: 0;
  z-index: 9999;
`

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  padding-left: 1rem;

  img {
    width: 8rem;
  }
`

export const SettingButton = styled.button`
  font-size: 2rem;
  padding-top: 1rem;
  margin-right: 1rem;

  &:hover svg {
    // svg 파일은 fill로 색을 바꿀 수 있다.
    fill: ${Common.colors.primary};
  }
`
