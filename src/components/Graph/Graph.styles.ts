import styled from "@emotion/styled";
import { Common } from "../../assets/styles/common";

export const ToggleButton = styled.button`
  width: 50%;
  border-radius: 6px;
  color: lightgray;
  font-weight: bold;
  padding: 8px 0 8px 0;

  &:hover {
    background: ${Common.colors.primary_dark};
    color: black;
  }

  &.active {
    background: ${Common.colors.primary_dark};
    color: black;
  }
`

export const ToggleButtonWrapper = styled.div`
  width: 90%;
  margin: auto;
  border: 1px solid lightgray;
  border-radius: 6px;
`

export const Image = styled.img`
  width: 100%;
  margin-top: 17px;
`