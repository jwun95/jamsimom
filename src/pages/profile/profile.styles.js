import styled from '@emotion/styled'
import { Common } from '../../assets/styles/common'

export const SubTitle = styled.p`
  font-size: 14px;
  padding: 12px 0 12px 0;
  font-weight: bold;
  display: block;
`

export const List = styled.ul`
  padding: 0 16px 0 16px;
`

export const ListItem = styled.li`
  list-style: disc;
  font-size: 14px;
  padding: 8px 0 8px 0;
`

export const Text = styled.div`
  padding: 8px 0px 8px 0px;
  font-size: 14px;
`

export const Profile = styled.section`
  text-align: center;
`

export const ImageWrapper = styled.div`
  img {
    margin: auto;
    width: 128px;
    height: 128px;
    border-radius: 50%;
    border: 2px solid ${Common.colors.primary};
  }
`

export const Name = styled.div`
  padding: 16px 0;
`

export const Grade = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: center;
`

export const Info = styled.p`
  font-size: 14px;
  padding: 8px 0;
`

export const TagWrapper = styled.ul`
display: flex;
justify-content: center;
margin: 8px 0;

& > li {
  margin-right: 6px;
}

& > li + li {
  margin-left: 6px;
}
`