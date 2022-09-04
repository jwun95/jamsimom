import * as styles from './MuiAccordion.styles'
// Mui
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

// p태그 오류
const MuiAccordion = ({ title, children, ...props }) => {
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

export default MuiAccordion
