import * as styles from './MuiDatePicker.styles'
import TextField from '@mui/material/TextField'

const MuiDatePicker = ({ onClick, ...props }) => {

  const handleChange = (event) => {
    onClick(event.target.value)
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

export default MuiDatePicker