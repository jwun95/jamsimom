// Base
import React from 'react'
// Mui
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'

const MuiRadioGroup = () => {
  return (
    <>
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel
            labelPlacement="start"
            value="male"
            control={
              <Radio
                sx={{
                  color: '#904309',
                  '&.Mui-checked': {
                    color: '#904309',
                  },
                }}
              />
            }
            label="남"
          />
          <FormControlLabel
            labelPlacement="start"
            value="male"
            sx={{
              marginLeft: '26px',
            }}
            control={
              <Radio
                sx={{
                  color: '#904309',
                  '&.Mui-checked': {
                    color: '#904309',
                  },
                }}
              />
            }
            label="여"
          />
        </RadioGroup>
      </FormControl>
    </>
  )
}

export default MuiRadioGroup
