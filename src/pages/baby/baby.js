import TitleNavLayout from '../../layouts/TitleNavLayout/TitleNavLayout'
import * as tools from '../../assets/styles/tools'
import * as styles from './baby.styles'
import { useNavigate } from 'react-router-dom'
// Components
import Section from '../../components/Section/Section'
import CheckBox from '../../components/CheckBox/CheckBox'
import Button from '../../components/Button/Button'
// Mui
import MuiRadioGroup from '../../mui/MuiRadioGroup/MuiRadioGroup'
import MuiDatePicker from '../../mui/MuiDatePicker/MuiDatePicker'

const Baby = () => {
  const navigator = useNavigate()

  const handleClick = () => {
    navigator('/')
  }

  return (
    <TitleNavLayout title="아이 등록">
      <Section subtitle="이름" required={true}>
        <tools.Input placeholder="이름을 입력해주세요."></tools.Input>
      </Section>
      <Section subtitle="성별" required={true}>
        <MuiRadioGroup />
      </Section>
      <Section subtitle="생년월일" required>
        <MuiDatePicker />
      </Section>
      <Section subtitle="특이사항">
        <CheckBox name="음식알러지가 있어요." />
        <CheckBox name="소리에 예민해요." />
      </Section>
      <Button fullWidth outline>
        <styles.ButtonText>+ 아이추가</styles.ButtonText>
      </Button>
      <tools.Divider className="my-5"></tools.Divider>
      <Button fullWidth onClick={handleClick}>
        <span className="text-lg">등록 완료</span>
      </Button>
    </TitleNavLayout>
  )
}

export default Baby
