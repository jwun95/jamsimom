// Base
import TitleLayout from '../../layouts/TitleLayout/TitleLayout'
import { data } from '../../data/db'
import { useState } from 'react'
import * as tools from '../../assets/styles/tools'
import { useLocation, useNavigate } from 'react-router-dom'
import { Common } from '../../assets/styles/common'
// Components
import Tag from '../../components/Tag/Tag'
import Profile from '../../components/Profile/Profile'
import OptionList from '../../components/OptionList/OptionList'
import Section from '../../components/Section/Section'
import Button from '../../components/Button/Button'
// Mui
import MuiAccordion from '../../mui/MuiAccordion/MuiAccordion'

const List = () => {
  const location = useLocation()
  const navigator = useNavigate()
  const [selectionTags, setSelectionTags] = useState([])

  const addOptions = [
    { id: 1, option: '동일성별' },
    { id: 2, option: '등 / 하원' },
    { id: 3, option: '조건' },
  ]

  const option = location.state

  const handleClick = () => {
    navigator('/profile')
  }

  const handleTagClick = (idx) => {
    console.log(idx)
  }

  return (
    <TitleLayout title="시터 목록">
      <MuiAccordion title="검색 조건">
        <OptionList option={option} />
        <p className="mt-3">추가조건</p>
        <tools.TagWrapper className="mt-3">
          {addOptions.map((item) => (
            <Tag
              key={item.id}
              backgroundColor={Common.colors.primary_lighter}
              hoverOption={{
                backgroundColor: Common.colors.primary_light,
                borderColor: Common.colors.primary,
              }}
              onClick={() => handleTagClick(item.id)}
            >
              {item.option}
            </Tag>
          ))}
        </tools.TagWrapper>
        <Button className="mt-5" outline={true} fullWidth={true}>
          수정
        </Button>
      </MuiAccordion>
      <tools.Divider className="my-3"></tools.Divider>
      <Section subtitle={'검색결과( ' + data.user.length + ' )'}>
        {' '}
        <tools.TagWrapper>
          <Tag borderColor="lightgray">추천순</Tag>
          <Tag borderColor="lightgray">거리순</Tag>
          <Tag borderColor="lightgray">인기순</Tag>
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
