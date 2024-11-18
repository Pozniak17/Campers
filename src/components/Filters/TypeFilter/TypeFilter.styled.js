import styled from "styled-components";

export const Title = styled.h2`
  color: #101828;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 120% */
`;

export const Line = styled.hr`
  margin-top: 24px;
  margin-bottom: 24px;
  width: 360px;

  stroke-width: 1px;
  stroke: rgba(16, 24, 40, 0.1);
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const Item = styled.li`
  list-style: none;
  display: flex;
`;

export const Button = styled.button`
  width: 100px;
  height: 95px;
  border-radius: 10px;
  border: 1px solid rgba(16, 24, 40, 0.2);

  mix-blend-mode: multiply;
  cursor: pointer;

  &:hover {
    border: 1px solid #e44848;
  }
`;

export const Container = styled.div`
  margin-bottom: 64px;
`;
