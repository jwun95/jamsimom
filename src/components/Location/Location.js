// Base
import * as styles from './Location.styles'
import * as tools from '../../assets/styles/tools'
import { useState, useEffect } from 'react'
import { Map, MapMarker } from 'react-kakao-maps-sdk'
// Components
import Button from '../Button/Button'
import Section from '../Section/Section'
import Graph from '../Graph/Graph'
import Notification from '../Notification/Notification'

const Location = (props) => {
  const [locationState, setLocationState] = useState(false)
  const [state, setState] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  })
  const [locationInfo, setLocationInfo] = useState('')
  var geocoder = new window.kakao.maps.services.Geocoder()

  const searchAddrFromCoords = (coords, callback) => {
    // 좌표로 행정동 주소 정보를 요청합니다
    geocoder.coord2RegionCode(coords.lng, coords.lat, callback)
  }

  const displayCenterInfo = (result, status) => {
    if (status === window.kakao.maps.services.Status.OK) {
      for (var i = 0; i < result.length; i++) {
        // 행정동의 region_type 값은 'H' 이므로
        if (result[i].region_type === 'H') {
          setLocationInfo(result[i].address_name)
          break
        }
      }
    }
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            isLoading: false,
          }))
        },
        (err) => {
          setState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }))
        }
      )
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      setState((prev) => ({
        ...prev,
        errMsg: '위치 정보를 알 수가 없어요.',
        isLoading: false,
      }))
    }
  }, [])

  const handleClick = () => {
    searchAddrFromCoords(state.center, displayCenterInfo)
    setLocationState(!locationState)
  }

  if (locationState) {
    return (
      <styles.LocationWrapper>
        <span className="font-bold">{locationInfo}</span>기준 500m이내에{' '}
        <span className="font-bold">12명</span>이 있습니다.
        <styles.LocationImageWrapper>
          <Map
            center={state.center}
            style={{ width: '100%', height: '360px' }}
            level={3} // 지도의 확대 레벨
            zoomable={false}
          >
            <MapMarker position={state.center}></MapMarker>
          </Map>
        </styles.LocationImageWrapper>
        <Section subtitle="우리 동네 시터 예보" className="mt-7" add={true}>
          <p className="my-5">
            현재 <span className="font-bold">{locationInfo}</span> 주변 서비스
            혼잡도입니다.
          </p>
          <Graph />
          <Notification/>
        </Section>
      </styles.LocationWrapper>
    )
  } else {
    return (
      <tools.ColorSection className="text-center">
        <div>
          <p className="font-bold">위치 정보가 등록되어 있지 않습니다.</p>
          <p>위치 정보를 등록하시면 나의 위치와 가까운</p>
          <p>시터들부터 보여드립니다.</p>
        </div>
        <Button className="mt-2" outline={true} onClick={handleClick}>
          내 위치 등록
        </Button>
      </tools.ColorSection>
    )
  }
}

export default Location
