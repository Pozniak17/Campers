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
  justify-content: space-between;
  align-items: baseline;
`;

export const Title = styled.h2`
  color: #101828;

  font-family: Inter;
  font-size: 24px;
  font-weight: 600px;
  line-height: 30px;
`;

export const Img = styled.img`
  min-width: 290px;
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

export const BtnWrapper = styled.ul`
  margin-top: 44px;
  gap: 40px;
  display: flex;
  list-style: none;
  border-bottom: 1px solid rgba(16, 24, 40, 0.2);
`;

export const ButtonParagraph = styled.button`
  color: #101828;
  background-color: #fff;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 120% */
  border: none;
  cursor: pointer;
  padding-bottom: 20px;

  border-bottom: ${(props) => (props.isActive ? "5px solid#E44848" : "none")};
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const Text = styled.span`
  display: inline-flex;
  background-color: #f2f4f7;

  padding: 12px 18px;
  align-items: center;
  gap: 8px;
  border-radius: 100px;
  cursor: pointer;

  color: #101828;

  text-align: center;
  font-family: Inter;
  font-size: 16px;

  font-weight: 500;
  line-height: 20px;
`;

export const WrapperData = styled.div`
  margin-top: 8px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
`;

export const ShortText = styled.p`
  color: #475467;

  /* Main text */
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;
