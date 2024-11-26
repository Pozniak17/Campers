import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  width: 166px;
  padding: 16px 60px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: var(--White, #fff);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.08px;

  border-radius: 200px;
  background: var(--Button, #e44848);
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #d84343;
  }
`;
