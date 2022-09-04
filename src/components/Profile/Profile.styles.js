import styled from "@emotion/styled";


export const Profile = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
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

export const Grade = styled.div`
  font-size: 12px;
  display: flex;
`