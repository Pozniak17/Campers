import styled from "styled-components";

export const Container = styled.div`
  margin-top: 44px;
  display: flex;
  gap: 24px;
`;

export const List = styled.ul`
  width: 430px;
  list-style: none;
`;

export const Circle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 60px;
  background: #f2f4f7;
`;

export const Latter = styled.span`
  color: #e44848;
  font-family: Inter;
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
`;

export const TitleName = styled.h2`
  color: #101828;
  font-family: Inter;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const Text = styled.p`
  margin-top: 16px;
  color: #475467;
  font-family: Inter;
  font-size: 16px;

  line-height: 24px; /* 150% */
`;

export const Item = styled.li`
  &:last-child {
    margin-top: 24px;
  }
`;
