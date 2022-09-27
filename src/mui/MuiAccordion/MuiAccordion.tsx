// Base
import * as styles from './MuiAccordion.styles'
import React, { ReactNode } from 'react';
// Mui
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'


export function MuiAccordion({ title, children, ...props }: {title: string, children: ReactNode}) {
  return (
    <div {...props}>
      {' '}
      <Accordion defaultExpanded={true} sx={styles.Accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={styles.Title}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </div>
  )
}
