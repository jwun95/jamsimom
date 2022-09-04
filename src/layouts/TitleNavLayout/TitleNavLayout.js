import TitleHeader from '../../components/TitleHeader/TitleHeader'
import Navbar from '../../components/Navbar/Navbar'
import * as styles from './TitleNavLayout.styles'

const TitleNavLayout = (props) => {
  return (
    <>
      <TitleHeader title={ props.title } />
      <styles.Main>{props.children}</styles.Main>
      <Navbar />
    </>
  )
}

export default TitleNavLayout
