import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Common } from "../../assets/styles/common";

export const LinkButton = styled(Link)`
  text-align: center;
  color: grey;
  padding-top: 0.5rem;

  &:hover {
    color: ${Common.colors.brown_lighter};
  }

  &:hover svg {
    fill: ${Common.colors.brown_lighter};
  }

  svg {
    font-size: 2rem;
    margin: auto;
  }

  span {
    font-size: 0.8rem;
    padding-top: 0.2rem;
    display: block;
  }
`