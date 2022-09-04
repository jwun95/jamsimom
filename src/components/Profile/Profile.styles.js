import styled from "@emotion/styled";
import { Common } from '../../assets/styles/common'


export const Profile = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`

export const ProfileImage = styled.div`
  display: inline-block;
  width: 30%;

  img {
    margin: auto;
    width: 60px;
    height: 60px;
  }
`