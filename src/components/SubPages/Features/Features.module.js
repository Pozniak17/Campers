import styled from "styled-components";

export const Item = styled.li`
  list-style: none;
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

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 44px;
`;

export const MainWrapper = styled.div`
  /* width: 430px; */
  display: flex;
  gap: 24px;
  margin-top: 44px;
`;

export const FirstWrapper = styled.div`
  width: 430px;
`;

export const SecondWrapper = styled.div`
  width: 448px;
  border-radius: 10px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  padding: 24px;
`;

export const Title = styled.h2`
  color: #101828;
  padding-bottom: 24px;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px; /* 120% */
  border-bottom: 1px solid rgba(16, 24, 40, 0.1);
`;

export const OptionList = styled.ul`
  list-style: none;
  padding-top: 20px;
`;

export const OptionItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const OptionText = styled.span`
  color: #101828;
  font-family: Inter;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px; /* 133.333% */
`;

export const FormTitle = styled.h2`
  color: #101828;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px; /* 120% */
`;

export const FormText = styled.p`
  color: #475467;
  margin-top: 8px;
  margin-bottom: 24px;
  font-family: Inter;
  font-size: 16px;

  line-height: 24px; /* 150% */
`;

export const Input = styled.input`
  width: 400px;
  height: 56px;
  border-radius: 10px;
  background-color: #f7f7f7;
  border: none;
  margin-bottom: 14px;
  padding: 18px;

  color: rgba(16, 24, 40, 0.6);

  font-family: Inter;
  font-size: 16px;
  line-height: 20px;
`;

export const TextField = styled.textarea`
  background: #f7f7f7;
  width: 400px;
  height: 114px;
  border: none;
  padding: 18px;
  border-radius: 10px;
  margin-bottom: 24px;
`;

export const Button = styled.button`
  padding: 16px 60px;
  border-radius: 200px;
  background: #e44848;
  border: none;
  color: #fff;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.08px;
  cursor: pointer;

  &:hover {
    background-color: #d84343;
  }
`;
