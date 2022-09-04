import * as styles from './Profile.styles'
import { Tag } from '../Tag/Tag.styles'
import image from '../../static/profile.png'
import * as tools from '../../assets/styles/tools'

const defaultUser = {
  id: 1,
  image: image,
  name: '심재운',
  age: 28,
  sex: '남',
  tags: ['개발자', '피아노'],
  address: '노원구 상계1동',
  info: '제 아이처럼 돌보겠습니다.',
}

const Profile = ({ user = defaultUser, ...props }) => {
  return (
    <styles.Profile>
      <styles.ProfileImage>
        <img src={user.image} alt="profile" />
      </styles.ProfileImage>
      <section>
        <div>
          <span className="font-bold">{user.name}</span>
          <span className="ml-2">
            {user.age} / {user.sex}
          </span>
        </div>
        <p className="mt-2">{user.address}</p>
        <tools.TagWrapper>
          {user.tags.map((item, idx) => (
            <Tag small={true} isColor={true} key={idx}>
              {item}
            </Tag>
          ))}
        </tools.TagWrapper>
        <p>{user.info}</p>
      </section>
    </styles.Profile>
  )
}

export default Profile
