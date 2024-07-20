import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
`;

export const Logo = styled.p`
  font-weight: 700;
  margin: 0;
`;

export const MainTitle = styled.h1`
  font-family: "Lobster", sans-serif;
  font-size: 24px;
  color: #e44848;
  cursor: pointer;

  &:hover {
    color: green;
  }
`;

export const Nav = styled.nav`
  display: flex;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  margin-left: 35px;

  &.active {
    color: white;
    background-color: #e44848;
  }
`;
