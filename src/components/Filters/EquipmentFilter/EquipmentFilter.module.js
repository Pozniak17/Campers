import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 32px;
`;

export const Title = styled.h3`
  color: #475467;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */

  margin-bottom: 14px;
`;

export const MainTitle = styled.h2`
  color: #101828;

  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 120% */
`;

export const Line = styled.hr`
  stroke-width: 1px;
  stroke: rgba(16, 24, 40, 0.1);
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 10px;
`;

export const Item = styled.li`
  list-style: none;
`;

export const Button = styled.button`
  width: 112px;
  height: 95px;
  padding: 17px 12px;
  align-items: center;

  display: flex;
  justify-content: center;
  height: 95px;
  padding: 17px 12px;
  align-items: center;

  border-radius: 10px;
  border: 1px solid rgba(16, 24, 40, 0.2);

  mix-blend-mode: multiply;
  cursor: pointer;

  &:hover {
    border-radius: 10px;
    border: 1px solid #e44848;
  }
`;
