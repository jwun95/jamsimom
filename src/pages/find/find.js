// Base
import TitleNavLayout from '../../layouts/TitleNavLayout/TitleNavLayout'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { data } from '../../data/db'
import * as styles from './find.styles'
import * as tools from '../../assets/styles/tools'
// Components
import CheckCard from '../../components/CheckCard/CheckCard'
import Button from '../../components/Button/Button'
import Address from '../../components/Address/Address'
import Section from '../../components/Section/Section'
import Graph from '../../components/Graph/Graph'
import CheckBox from '../../components/CheckBox/CheckBox'
import Notification from '../../components/Notification/Notification'
// MUI
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MuiDatePicker from '../../mui/MuiDatePicker/MuiDatePicker'

const Find = () => {
  const navigate = useNavigate()

  const [children, setChildren] = useState(data.baby)
  const [dateInfo, setDateInfo] = useState(false)
  const [timeInfo, setTimeInfo] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const [selection, setSelection] = useState([])
  const [when, setWhen] = useState('오전')

  console.log(selection)

  const open = Boolean(anchorEl)
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = (info = when) => {
    setAnchorEl(null)
    setWhen(info)
  }

  const goListPage = () => {
    navigate('/list')
  }

  const handleDateInfo = (info) => {
    setDateInfo(info)
  }

  const handleChange = (event) => {
    setTimeInfo(event.target.value)
  }

  // 체크 카드 단일 선택
  const handleSingleCheck = (checked, idx) => {
    if (checked) {
      setSelection((prev) => [...prev, idx])
    } else {
      setSelection(selection.filter((id) => id !== idx))
    }
  }

  // 전체 선택
  const handleAllCheck = (checked) => {
    if (checked) {
      const idxArray = []
      children.forEach((item) => idxArray.push(item.id))
      setSelection(idxArray)
    } else {
      setSelection([])
    }
  }

  // 아이 CheckCard
  const list = children.map((child) => (
    <CheckCard
      key={child.id}
      child={child}
      onClick={handleSingleCheck}
      checked={selection.includes(child.id) ? true : false}
    />
  ))

  return (
    <TitleNavLayout title="시터 검색">
      <Section subtitle="돌봄대상" required={true}>
        <CheckBox
          name="전체선택"
          onClick={handleAllCheck}
          allChecked={selection.length === children.length ? true : false}
        />
        <ul className="mt-4">{list}</ul>
      </Section>
      <Section subtitle="주소" required={true}>
        <Address />
        <tools.Input placeholder="나머지 주소 입력" />
      </Section>
      <Section subtitle="날짜" required={true}>
        <MuiDatePicker onClick={handleDateInfo} />
        {dateInfo ? <Graph className="mt-5" /> : null}
      </Section>

      <Section subtitle="시간" required={true}>
        <div>
          <styles.TimeSelector
            id="demo-positioned-button"
            aria-controls={open ? 'demo-positioned-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleMenuClick}
          >
            {when}
          </styles.TimeSelector>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={() => handleClose()}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <MenuItem onClick={() => handleClose('오전')}>오전</MenuItem>
            <MenuItem onClick={() => handleClose('오후')}>오후</MenuItem>
          </Menu>
          <styles.TimeInput
            type="text"
            defaultValue={''}
            aria-label="hour"
            onChange={handleChange}
          />
          <span className="mr-6 font-bold">시부터</span>
          <styles.TimeInput type="text" defaultValue={''} aria-label="minute" />
          <span>시간</span>
        </div>
        {timeInfo ? <Notification className="mt-10" /> : null}
      </Section>
      <Button className="mt-5" fullWidth={true} onClick={goListPage}>
        시터 검색
      </Button>
    </TitleNavLayout>
  )
}

export default Find
