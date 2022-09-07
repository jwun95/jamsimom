// Base
import TitleLayout from '../../layouts/TitleLayout/TitleLayout'
import { data } from '../../data/db'
import * as styles from './register.styles'
import * as tools from '../../assets/styles/tools'
// Components
import Section from '../../components/Section/Section'
import Profile from '../../components/Profile/Profile'
import OptionList from '../../components/OptionList/OptionList'
import Button from '../../components/Button/Button'

const Register = () => {

  return (
    <TitleLayout title="시터 매칭">
      <Section subtitle="시터 정보">
        {' '}
        <tools.Card>
          <Profile user={data.user[0]} />
        </tools.Card>
      </Section>

      <Section subtitle="선택 정보">
        {' '}
        <tools.Card>
          <span className="font-bold">{data.baby[0].name}</span>
          <span className="ml-3">
            만 {data.baby[0].age} / {data.baby[0].sex}{' '}
          </span>
        </tools.Card>
        <OptionList className="mt-3" />
      </Section>
      <Section subtitle="요구사항">
        <styles.Input placeholder="요구사항을 입력하세요" />
      </Section>
      <Section subtitle="예상 가격">
        {' '}
        <div className="flex justify-between">
          <span>2시간</span>
          <span className="font-bold">30,000원</span>
        </div>
        <tools.Divider className="mt-8" />
        <span className="block text-center py-4">
          현재 정보대로 시터를 신청하시겠습니까?
        </span>
      </Section>
      <Button fullWidth={true} url="/result">
        시터 신청
      </Button>
    </TitleLayout>
  )
}

export default Register
