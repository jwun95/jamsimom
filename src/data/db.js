import park from '../static/park.svg'
import lee from '../static/lee.svg'
import son from '../static/son.svg'

export const data = {
  user: [
    {
      id: 1,
      image: park,
      name: '박주영',
      age: 28,
      sex: '여',
      tags: ['조형', '피아노'],
      info: '제 아이처럼 돌보겠습니다.',
    },
    {
      image: son,
      name: '이지현',
      age: 24,
      sex: '여',
      tags: ['대학생', '배드민턴'],
      info: '제 동생처럼 열심히 보살피겠습니다.',
    },
    {
      image: lee,
      name: '이충헌',
      age: 27,
      sex: '남',
      tags: ['운동', '요리'],
      info: '정성으로 돌보겠습니다.',
    },
  ],
  reviews: [
    { text: '저희 아이가 너무 좋아해요', image: son },
    { text: '시간 약속을 잘 지키고 성실해요', image: lee },
  ],
  baby: [
    {
      id: 1,
      name: '이하영',
      age: 3,
      sex: '여',
      notification: '땅콩 알러지 있음',
    },
    {
      id: 2,
      name: '이은우',
      age: 2,
      sex: '남',
      notification: '낯 가림이 심함',
    },
    { id: 3, name: '이하윤', age: 1, sex: '여', notification: '자주 넘어짐' },
  ],
}
