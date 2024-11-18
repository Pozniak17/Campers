import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeroSection = styled.section`
  color: #fff;
  padding: 0 64px;
  height: 100vh;
  background-color: #2a2a2a;
  background-image: url("./images/picture.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  display: flex;
  align-items: center;
`;

export const Wrapper = styled.div``;

export const MainTitle = styled.h1`
  color: var(--Inputs, #f7f7f7);
  font-family: Inter;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px; /* 66.667% */
  margin-bottom: 16px;
`;

export const SecondTitle = styled.h2`
  color: var(--Inputs, #f7f7f7);
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px; /* 133.333% */
  margin-bottom: 40px;
`;

export const CustomLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  color: var(--White, #fff);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.08px;

  border-radius: 200px;
  background: var(--Button, #e44848);
  width: 173px;
  height: 56px;
  border: none;
  cursor: pointer;

  &:hover {
    background: var(--Button-Hover, #d84343);
  }
`;
