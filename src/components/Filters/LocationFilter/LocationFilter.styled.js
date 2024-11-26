import styled from "styled-components";
import { Icon } from "../../shared/icon";

export const Wrapper = styled.div`
  margin-bottom: 40px;
`;

export const Title = styled.h3`
  color: var(--Gray, #6c717b);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */

  margin-bottom: 8px;
`;

export const IconStyled = styled(Icon)`
  position: absolute;
  top: 50%;
  left: 18px;
  transform: translateY(-50%);

  display: flex;
  align-items: center;
  justify-content: center;
  transition: fill 0.3s ease; /* Плавний перехід кольору */
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 360px;

  &:focus-within svg {
    fill: #101828; /* Змінюємо колір іконки */
  }
`;

export const Input = styled.input`
  width: 100%;

  color: var(--Gray, #6c717b);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  background: #f7f7f7;
  border-radius: 10px;
  border: none;

  padding: 18px 218px 18px 46px;

  &:focus {
    color: var(--Main, #101828);
  }
`;
