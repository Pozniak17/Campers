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
`;

export const Title = styled.h2`
  color: #101828;

  font-family: Inter;
  font-size: 24px;
  font-weight: 600px;
  line-height: 30px;
`;

export const Img = styled.img`
  object-fit: cover;
  border-radius: 10px;
`;

export const Button = styled.button`
  color: #fff;
  border-radius: 200px;
  background: #e44848;
  border: none;

  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.08px;

  padding: 16px 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  cursor: pointer;

  &:hover {
    border-radius: 200px;
    background: #d84343;
  }
`;

export const ImageWrapper = styled.ul`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`;

export const Item = styled.li`
  list-style: none;
`;

export const ModalTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SecondWrapper = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 16px;
`;

export const CloseButton = styled.button`
  background-color: inherit;
  border: none;

  &:hover {
    color: #e44848;
  }
`;

export const DataText = styled.p`
  color: #101828;
  margin-right: 16px;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  text-decoration-line: underline;
`;

export const LocationText = styled.p`
  margin-left: 4px;
  color: #101828;

  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

export const AboutText = styled.p`
  color: #475467;
  font-family: Inter;
  font-size: 16px;
  line-height: 24px; /* 150% */
`;
