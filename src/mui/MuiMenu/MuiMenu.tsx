// Base
import { useState, useEffect } from 'react'
import * as styles from './MuiMenu.styles'
import React from 'react'
// Mui
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

interface IMuiMenuProps {
  defaultType: string
  menuItems: string[]
  onClick: (value:string) => void
  className?: string
}

export function MuiMenu({ defaultType, menuItems = [], onClick, className, ...props }:IMuiMenuProps) {
  const [anchorEl, setAnchorEl] = useState(null)
  const [currValue, setCurrValue] = useState(defaultType)
  const open = Boolean(anchorEl)

  useEffect(() => {
    onClick('오전')
  }, [])

  const handle = {
    close: (value:string) => {
      setAnchorEl(null)
      setCurrValue(value ? value : currValue)
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
        {currValue}
      </styles.MenusButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => handle.close(null)}
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
