import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  gap: 24px;
  margin-bottom: 24px;
  border-radius: 20px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  background: #fff;
  list-style: none;
  width: 888px;
  height: 358px;
  padding: 24px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const WrapperTitle = styled.div`
  display: flex;
  gap: 248px;
`;

export const Title = styled.h2`
  color: #101828;

  font-family: Inter;
  font-size: 24px;
  font-weight: 600px;
  line-height: 30px;
`;
