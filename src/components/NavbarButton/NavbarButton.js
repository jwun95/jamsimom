import { RiHome5Line } from 'react-icons/ri'
import { AiOutlineSearch } from 'react-icons/ai'
import { FiUser } from 'react-icons/fi'
import * as styles from './NavbarButton.styles'

const NavbarButton = (props) => {
  let button

  if (props.name === 'home') {
    button = (
      <styles.LinkButton to='/' >
        <RiHome5Line />
        <span>홈</span>
      </styles.LinkButton>
    )
  } else if (props.name === 'search') {
    button = (
      <styles.LinkButton to="/list">
        <AiOutlineSearch />
        <span>검색</span>
      </styles.LinkButton>
    )
  } else {
    button = (
      <styles.LinkButton to='/baby'>
        <FiUser />
        <span>아이 관리</span>
      </styles.LinkButton>
    )
  }

  return <>{button}</>
}

export default NavbarButton
