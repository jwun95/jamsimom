import TitleLayout from '../../layouts/TitleLayout/TitleLayout'
import * as styles from './profile.styles'
import * as tools from '../../assets/styles/tools'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { data } from '../../data/db'
import star from '../../static/star.svg'
import thumbnail from '../../static/thumbnail.svg'
// Components
import Section from '../../components/Section/Section'
import Tag from '../../components/Tag/Tag'
import Button from '../../components/Button/Button'

const Profile = () => {
  const navigator = useNavigate()
  const [sitter, setSitter] = useState(data.user[0])

  const handleClick = () => {
    navigator('/register')
  }

  return (
    <TitleLayout title="시터 정보">
      <styles.Profile>
        <styles.ImageWrapper>
          <img src={sitter.image} alt="" />
        </styles.ImageWrapper>
        <styles.Name>
          <span className="font-bold">{sitter.name}</span>
          <span className="ml-[8px]">
            {sitter.age} / {sitter.sex}
          </span>
        </styles.Name>
        <styles.TagWrapper>
          <li>
            <Tag fontSize="12px" disabled>
              대학생
            </Tag>
          </li>
          <li>
            <Tag fontSize="12px" disabled>
              미술
            </Tag>
          </li>
        </styles.TagWrapper>
        <styles.TagWrapper>
          <li>
            {' '}
            <Tag fontSize="12px" disabled>
              잠시만 교육 인증
            </Tag>
          </li>
          <li>
            {' '}
            <Tag fontSize="12px" disabled>
              교직 이수
            </Tag>
          </li>
        </styles.TagWrapper>
        <styles.Grade>
          <img src={star} alt="star" />
          <span className="font-bold">5.0/5 (4명)</span>
        </styles.Grade>
        <styles.Info>{sitter.info}</styles.Info>
      </styles.Profile>
      <tools.Divider className="my-3" />
      <Section subtitle="선생님 소개">
        <styles.SubTitle className="mt-3">잠시맘 매니저 소개</styles.SubTitle>
        <styles.List>
          <styles.ListItem>
            적극적이고 밝은 성격으로 자녀들을 잘 케어해줄 시터입니다.
          </styles.ListItem>
        </styles.List>
        <tools.Divider />
        <styles.SubTitle>시터 자기 소개</styles.SubTitle>
        <ul className="py-[8px]">
          <li>
            <Tag fontSize="12px" disabled>
              신선 대학교 조형학과
            </Tag>
          </li>
        </ul>
        <styles.Text>
          안녕하세요! 저는 24살 현재 졸업을 앞둔 박주영이라고 합니다. 저는
          원래부터 아이들을 정말 좋아해서 제가 인연을 맺은 아이들에게는 많은
          관심과 정성을 쏟아주고 싶다고 생각해오고 있어요. 140시간 교육봉사라는
          밀도높은 경험을 통해 저는 저와 만나는 아이들에게 보다 의미있는 시간을
          만들어 줄 수 있을 거라 자신합니다! 아이와 부모님 모두 얼른 만나뵙길
          고대하고 있겠습니다!
        </styles.Text>
      </Section>
      <tools.Divider />
      <Section subtitle="이력 및 경험">
        <styles.List>
          <styles.ListItem>
            교내 자원봉사 동아리 [해랑들] 활동으로 140시간 보육원 교육봉사 경험
          </styles.ListItem>
          <styles.ListItem>
            미술교사 교직이수 수업 수강 및 영아 대상 유치원 실습 완료
          </styles.ListItem>
        </styles.List>
      </Section>
      <tools.Divider />
      <Section subtitle="활동 가능 연령대">
        <styles.SubTitle>2-4세 전문</styles.SubTitle>
        <styles.Text>*이하 / 이상도 가능합니다.</styles.Text>
      </Section>
      <tools.Divider />
      <Section subtitle="시터 인터뷰">
        <styles.SubTitle>“마음을 다하는 시터, 박주영입니다!”</styles.SubTitle>
        <styles.Interview>
          <img src={thumbnail} alt="thumbnail" />
        </styles.Interview>
      </Section>
      <Button fullWidth onClick={handleClick}>
        시터 선택
      </Button>
    </TitleLayout>
  )
}

export default Profile
