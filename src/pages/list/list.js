// Base
import TitleLayout from '../../layouts/TitleLayout/TitleLayout'
import { useNavigate } from 'react-router-dom'
import { data } from '../../data/db'
import * as tools from '../../assets/styles/tools'
// Components
import Tag from '../../components/Tag/Tag'
import Profile from '../../components/Profile/Profile'
import OptionList from '../../components/OptionList/OptionList'
import Section from '../../components/Section/Section'
import Button from '../../components/Button/Button'
// Mui
import MuiAccordion from '../../mui/MuiAccordion/MuiAccordion'

const List = () => {

  const navigator = useNavigate()

  const handleClick = () => {
    navigator('/profile')
  }

  return (
    <TitleLayout title="시터 목록">
      <MuiAccordion title="검색 조건">
        <OptionList />
        <Button className="mt-5" outline={true} fullWidth={true}>
          수정
        </Button>
      </MuiAccordion>
      <tools.Divider className="my-3"></tools.Divider>
      <Section subtitle="검색결과 ( 4 )">
        {' '}
        <tools.TagWrapper>
          <Tag>추천순</Tag>
          <Tag>거리순</Tag>
          <Tag>인기순</Tag>
        </tools.TagWrapper>
        {data.user.map((item, idx) => {
          return (
            <tools.Card key={idx} onClick={handleClick}>
              <Profile user={item} />
            </tools.Card>
          )
        })}
      </Section>
    </TitleLayout>
  )
}

export default List
