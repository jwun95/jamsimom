// Base
import TitleNavLayout from '../../layouts/TitleNavLayout/TitleNavLayout'
import { useState, useEffect } from 'react'
import { data } from '../../data/db'
// Components
import CheckCard from '../../components/CheckCard/CheckCard'
import Button from '../../components/Button/Button'
import Address from '../../components/Address/Address'
import Section from '../../components/Section/Section'
import Graph from '../../components/Graph/Graph'
import CheckBox from '../../components/CheckBox/CheckBox'
import Notification from '../../components/Notification/Notification'
import TimeSelector from '../../components/TimeSelector/TimeSelector'
// MUI
import MuiDatePicker from '../../mui/MuiDatePicker/MuiDatePicker'
import Menus from '../../components/Menus/Menus'

const Find = () => {
  const [children, setChildren] = useState(data.baby)
  const [dateInfo, setDateInfo] = useState(false)
  const [timeInfo, setTimeInfo] = useState(null)
  const [params, setParams] = useState(null)
  const [locationInfo, setLocationInfo] = useState('')

  const [selection, setSelection] = useState([])

  useEffect(() => {
    setParams({
      date: dateInfo,
      time: timeInfo,
      selection: selection,
      location: locationInfo,
    })
  }, [dateInfo, timeInfo, selection, locationInfo])

  const handle = {
    // 시간
    getTime: (e) => {
      setTimeInfo({ ...timeInfo, [e.target.name]: parseInt(e.target.value) })
    },
    // 주소
    getLocation: (location) => {
      setLocationInfo(location)
    },
    getDayType: (value) => {
      setTimeInfo({ ...timeInfo, dayType: value })
    },
    // 날짜
    getDate: (date) => {
      setDateInfo(date)
    },
    // 체크 카드 단일 선택
    singleCheck: (checked, idx) => {
      if (checked) {
        setSelection((prev) => [...prev, idx])
      } else {
        setSelection(selection.filter((id) => id !== idx))
      }
    },
    // 전체 선택
    allCheck: (checked) => {
      if (checked) {
        const idxArray = []
        children.forEach((item) => idxArray.push(item.id))
        setSelection(idxArray)
      } else {
        setSelection([])
      }
    },
  }

  // 아이 CheckCard
  const list = children.map((child) => (
    <CheckCard
      key={child.id}
      child={child}
      onClick={handle.singleCheck}
      checked={selection.includes(child.id) ? true : false}
    />
  ))

  return (
    <TitleNavLayout title="시터 검색">
      <Section subtitle="돌봄대상" required={true}>
        <CheckBox
          name="전체선택"
          onClick={handle.allCheck}
          allChecked={selection.length === children.length ? true : false}
        />
        <ul className="mt-4">{list}</ul>
      </Section>
      <Section subtitle="주소" required={true}>
        <Address onGetLocation={handle.getLocation} />
      </Section>
      <Section subtitle="날짜" required={true}>
        <MuiDatePicker onClick={handle.getDate} />
        {dateInfo ? <Graph className="mt-5" /> : null}
      </Section>

      <Section subtitle="시간" required={true}>
        <Menus
          defaultType={'오전'}
          className="inline-block"
          menuItems={['오전', '오후']}
          onClick={handle.getDayType}
        />
        <TimeSelector className="inline-block" onGetTime={handle.getTime} />
        {timeInfo ? <Notification className="mt-10" /> : null}
      </Section>
      <Button className="mt-5" fullWidth={true} url="/list" params={params}>
        시터 검색
      </Button>
    </TitleNavLayout>
  )
}

export default Find
