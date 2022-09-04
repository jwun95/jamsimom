import * as styles from './Header.styles'
import Logo from '../../static/logo.svg'
import { BsGear } from 'react-icons/bs'

const Header = () => {
  const handleSetting = () => {
    console.log('설정 버튼 클릭')
  }

  return (
    <styles.HeaderWrapper>
      <styles.Logo to="/">
        <img src={Logo} alt="main-logo" />
      </styles.Logo>
      <styles.SettingButton onClick={handleSetting}>
        <BsGear />
      </styles.SettingButton>
    </styles.HeaderWrapper>
  )
}

export default Header
