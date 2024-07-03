import styled from "styled-components";

export const Button = styled.button`
  display: inline-flex;
  padding: 16px 60px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: #fff;

  font-family: Inter;
  font-size: 16px;

  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.08px;

  border-radius: 200px;
  background: #e44848;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #d84343;
  }
`;
