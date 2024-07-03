import styled from "styled-components";

export const Title = styled.h3`
  color: rgba(16, 24, 40, 0.6);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  align-self: stretch;

  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 360px;
  height: 56px;
  border-radius: 10px;
  background: #f7f7f7;
  color: #101828;
  border: none;

  display: flex;
  padding: 18px 218px 18px 18px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const Wrapper = styled.div`
  margin-bottom: 32px;
`;
