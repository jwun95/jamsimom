// Base
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { data } from '../../data/db'
import DefaultLayout from '../../layouts/DefaultLayout/DefaultLayout'
import * as styles from './home.styles'
import * as tools from '../../assets/styles/tools'
// Components
import Profile from '../../components/Profile/Profile'
import Button from '../../components/Button/Button'
import Location from '../../components/Location/Location'
import Section from '../../components/Section/Section'
// Mui
import MuiAccordion from '../../mui/MuiAccordion/MuiAccordion'

const Home = () => {
  const navigate = useNavigate()
  const [reviews, setReviews] = useState(data.reviews)
  const [ranker, setRanker] = useState(data.user[0])
  const [locationState, setLocationState] = useState(false)

  const reviewList = reviews.map((item, idx) => (
    <styles.AccordionItem key={idx}>
      <styles.AccordionItemImage>
        <img src={item.image} alt="profile" />
      </styles.AccordionItemImage>
      <span>"{item.text}"</span>
    </styles.AccordionItem>
  ))

  const goFindPage = () => {
    navigate('/find')
  }

  return (
    <DefaultLayout>
      <tools.ColorSection className="flex justify-between items-center mb-10">
        <styles.SectionLeft>
          <p>잠시맘이 직접 선정한</p>
          <p>능력있는 시터들을 만나보세요!</p>
        </styles.SectionLeft>
        <Button onClick={goFindPage}>시터 찾기</Button>
      </tools.ColorSection>
      <Section subtitle="우리 동네 시터">
        <Location locationState={locationState} />
      </Section>
      <Section
        subtitle="금주의 인기 시터"
        className="flex items-center justify-between"
        add={true}
      >
        <styles.Card>
          <Profile user={ranker} />
          <MuiAccordion title="부모님 리뷰" className="mt-6">
            {reviewList}
          </MuiAccordion>
        </styles.Card>
      </Section>
    </DefaultLayout>
  )
}

export default Home
