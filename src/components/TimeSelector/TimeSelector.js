// Base
import * as styles from './TimeSelector.styles'
import { useEffect, useState } from 'react'
// Mui
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

const TimeSelector = ({ onGetTime, ...props }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [when, setWhen] = useState('오전')
  const [timeInfo, setTimeInfo] = useState({ time: '', hour: '' })

  const open = Boolean(anchorEl)

  useEffect(() => {
    onGetTime(timeInfo)
  })

  const handle = {
    change: (e) => {
      
      setTimeInfo({ [e.target.name]: e.target.value })
    },
    menuClick: (e) => {
      setAnchorEl(e.currentTarget)
    },
    close: (info) => {
      setAnchorEl(null)
      setWhen(info)
    },
  }

  return (
    <div {...props}>
      <styles.TimeSelector
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handle.menuClick}
      >
        {when}
      </styles.TimeSelector>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handle.close}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={() => handle.close('오전')}>오전</MenuItem>
        <MenuItem onClick={() => handle.close('오후')}>오후</MenuItem>
      </Menu>
      <styles.TimeInput
        type="number"
        name="hour"
        defaultValue=""
        aria-label="hour"
        onChange={handle.change}
      />
      <span className="mr-6 font-bold">시부터</span>
      <styles.TimeInput
        type="number"
        defaultValue=""
        name="time"
        aria-label="time"
        onChange={handle.change}
      />
      <span>시간</span>
    </div>
  )
}

export default TimeSelector
