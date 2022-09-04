import * as styles from './OptionList.styles'
import Tag from '../Tag/Tag'
import * as tools from '../../assets/styles/tools'


const OptionList = ({
  num = 2,
    address = '서울특별시 관악구 봉천동',
    date = '2022-08-29',
    tags = ['동일성별', '등 / 하원', '조건'],
  time='오후 4시-5시',
  ...props
}) => {
  return (
    <styles.OptionList {...props}>
      <styles.Option>
        <span>아이</span>
        <Tag isColor={false}>{num}명</Tag>
      </styles.Option>
      <styles.Option>
        <span>주소</span>
        <Tag isColor={false}>{address}</Tag>
      </styles.Option>
      <styles.Option>
        <span>날짜</span>
        <Tag isColor={false}>{date}</Tag>
        <span className="ml-3">시간</span>
        <Tag isColor={false}>{time}</Tag>
      </styles.Option>
      <p className="mt-3">추가조건</p>
      <tools.TagWrapper className="mt-3">
        {tags.map((item, idx) => (
          <Tag key={idx}>{item}</Tag>
        ))}
      </tools.TagWrapper>
    </styles.OptionList>
  )
}

export default OptionList