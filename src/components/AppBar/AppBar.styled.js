import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  margin: 0 auto;
  padding: 0 64px;
  display: flex;
  align-items: center;
  height: 72px;
`;

export const List = styled.nav`
  margin-left: 450px;
  display: flex;
  list-style: none;
`;

export const Item = styled.li`
  margin-right: 32px;
  &:last-child {
    margin-right: 0;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: var(--Main, #101828);
  text-align: center;
  /* Body 2 */
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */

  &.active {
    color: var(--Button-Hover, #d84343);
  }
`;
