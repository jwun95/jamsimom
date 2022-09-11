// Base
import { useState, useEffect } from 'react'
import * as styles from './MuiMenu.styles'
// Mui
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

const MuiMenu = ({ defaultType, menuItems = [], onClick, ...props }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [when, setWhen] = useState(defaultType)
  const open = Boolean(anchorEl)

  useEffect(() => {
    onClick('오전')
  }, [])

  const handle = {
    close: (value) => {
      setAnchorEl(null)
      setWhen(value ? value : when)
      onClick(value)
    },
    menusClick: (e) => {
      setAnchorEl(e.currentTarget)
    },
  }

  return (
    <div {...props}>
      <styles.MenusButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handle.menusClick}
      >
        {when}
      </styles.MenusButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => handle.close(false)}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {menuItems.map((item, idx) => (
          <MenuItem key={idx} onClick={() => handle.close(item)}>
            {item}
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

export default MuiMenu
