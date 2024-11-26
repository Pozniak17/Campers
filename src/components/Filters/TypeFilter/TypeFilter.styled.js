import styled from "styled-components";

export const Title = styled.h2`
  color: var(--Main, #101828);
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 120% */
`;

export const Line = styled.hr`
  width: 360px;
  height: 0px;
  border: 1px solid #dadde1;
  stroke: var(--Gray-light, #dadde1);
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const List = styled.ul`
  display: flex;
  gap: 10px;
`;

export const Item = styled.li`
  list-style: none;
  display: flex;
`;

export const Label = styled.label`
  width: 112px;
  height: 96px;
  color: var(--Main, #101828);
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.08px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 12px;
  border: 1px solid var(--Gray-light, #dadde1);
  mix-blend-mode: multiply;
  cursor: pointer;

  &:hover {
    border: 1px solid #e44848;
  }

  &:active {
    border: 1px solid #e44848;
  }
`;

// Сховати стандартний чекбокс
export const Checkbox = styled.input`
  display: none;
`;

export const Container = styled.div`
  margin-bottom: 40px;
`;
