// Base
import * as styles from './result.styles'
import { BsCheck2Circle } from 'react-icons/bs'
import * as tools from '../../assets/styles/tools'
import {data } from '../../data/db'
// Components
import Profile from '../../components/Profile/Profile'
import Button from '../../components/Button/Button'

const Result = () => {

    return (
      <>
        <styles.Section>
          <p className="font-bold">시터 신청</p>
          <BsCheck2Circle />
          <p className="text-bold text-lg font-bold">
            시터 신청이 완료되었습니다
          </p>
          <p className="mt-2 text-sm">시터가 돌봄을 수락할 시</p>
          <p className="text-sm">결제 안내 알림이 전송됩니다.</p>
        </styles.Section>
        <section className="p-4 mt-10">
          <styles.Info>
            <span>신청일시</span>
            <span>2022-09-05</span>
          </styles.Info>
          <styles.Info>
            <span>돌봄 날짜</span>
            <span>2022-09-05 | 오후 9시-11시</span>
          </styles.Info>
          <styles.Info>
            <span>예상 가격</span>
            <span>1시간 30,000원</span>
          </styles.Info>
          <styles.Info>
            <span>시터 정보</span>
          </styles.Info>
          <tools.Card>
            <Profile user={data.user[0]} />
          </tools.Card>
          <div className="text-sm p-4">
            <p>
              *시터 돌봄 수락 후 1시간 내 결제 미이행시 시터 신청이 취소됩니다.{' '}
            </p>
            <p className="mt-2">
              *단순 변심을 이유로 시터 돌봄 수락 후 3회 이상 취소시 서비스
              이용이 제한될 수 있습니다.
            </p>
          </div>
          <Button outline={true} fullWidth={true} url="/">
            홈으로 가기
          </Button>
        </section>
      </>
    )
}

export default Result