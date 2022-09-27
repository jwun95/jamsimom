// Base
import * as styles from './MuiDatePicker.styles'
import React from 'react'
// Mui
import TextField from '@mui/material/TextField'

export function MuiDatePicker ({ onClick, ...props }: {onClick?: (value:string) => void}) {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof onClick !== 'undefined') {
      onClick(event.target.value)
    }
    return
  }

  return (
    <TextField
      {...props}
      id="date"
      label=""
      type="date"
      defaultValue=""
      onChange={handleChange}
      sx={styles.DatePicker}
      InputLabelProps={{
        shrink: true,
      }}
    />
  )
}