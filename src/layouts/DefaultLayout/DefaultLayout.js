import Header from "../../components/Header/Header"
import Navbar from "../../components/Navbar/Navbar"
import * as styles from './DefaultLayout.styles'

const DefaultLayout = (props) => {
  return (
    <>
      <Header />
      <styles.Main>{props.children}</styles.Main>
      <Navbar />
    </>
  )
}

export default DefaultLayout