import styled from '@emotion/styled'
import { Common } from '../../assets/styles/common'

export const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export const SearchAddressButton = styled.button`
  width: 100%;
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  padding: 8px;

  &:hover {
    border: 1px solid ${Common.colors.primary};
  }
`
