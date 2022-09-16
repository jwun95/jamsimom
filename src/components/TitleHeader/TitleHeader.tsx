import { MdArrowBackIosNew } from 'react-icons/md'
import * as styles from './TitleHeader.styles'
import { useNavigate } from 'react-router-dom'
import React from 'react'

const TitleHeader = ({title}:{title:string}) => {

  let navigate = useNavigate()

  return (
    <styles.Header>
      <button onClick={() => navigate(-1)}>
        <MdArrowBackIosNew />
      </button>
      <span className="ml-3">{ title }</span>
    </styles.Header>
  )
}

export default TitleHeader
