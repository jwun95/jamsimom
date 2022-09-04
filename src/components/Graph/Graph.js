import * as styles from './Graph.styles'
import { useState } from 'react'
import graph from '../../static/graph.svg'

const Graph = ({...props }) => {
    const [toggleActive, setToggleActive] = useState(true)
    return (
      <div {...props}>
        <p className='mb-6'>
          <span className='font-bold'>해당 요일 평균 매칭 혼잡도</span>입니다.
        </p>
        <styles.ToggleButtonWrapper>
          <styles.ToggleButton
            className={toggleActive ? 'active' : ''}
            onClick={() => setToggleActive(true)}
          >
            오전
          </styles.ToggleButton>
          <styles.ToggleButton
            className={toggleActive ? '' : 'active'}
            onClick={() => setToggleActive(false)}
          >
            오후
          </styles.ToggleButton>
        </styles.ToggleButtonWrapper>
        <styles.Image src={graph} alt="prediction-graph"></styles.Image>
      </div>
    )
}

export default Graph