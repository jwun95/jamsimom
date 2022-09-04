import DaumPostcode from 'react-daum-postcode'
import { useState } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import * as styles from './Address.styles'
import * as tools from '../../assets/styles/tools'

const Address = () => {
  const [openPostcode, setOpenPostcode] = useState(false)
  const [open, setOpen] = useState(false)
  const [location, setLocation] = useState('클릭해서 주소를 입력해주세요.')
  const handleClose = () => setOpen(false)

  const handle = {
    // 버튼 클릭 이벤트
    clickButton: () => {
      setOpenPostcode(true)
      setOpen(true)
    },

    // 주소 선택 이벤트
    selectAddress: (data) => {
      setLocation(data.address)
      setOpen(false)
      setOpenPostcode(false)
    },
  }
  return (
    <>
      <tools.SearchButton onClick={handle.clickButton}>
        {location}
      </tools.SearchButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles.modalStyle}>
          {openPostcode && (
            <DaumPostcode
              onComplete={handle.selectAddress} // 값을 선택할 경우 실행되는 이벤트
              autoClose={true} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
              defaultQuery="" // 팝업을 열때 기본적으로 입력되는 검색어
            />
          )}
        </Box>
      </Modal>
    </>
  )
}

export default Address
