import styled from "styled-components";
import { Icon } from "../shared/icon";
// import { Icon } from "../../shared/icon";

// спільний контейнер для всієї форми
export const FormWrapper = styled.form`
  width: 360px;
`;

// LocationFilter
export const LocationWrapper = styled.div`
  margin-bottom: 40px;
`;

export const LocationTitle = styled.h3`
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

export const LocationInputWrapper = styled.div`
  position: relative;
  width: 360px;

  &:focus-within svg {
    fill: #101828; /* Змінюємо колір іконки */
  }
`;

export const LocationInput = styled.input`
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

// equipment
export const EquipmentWrapper = styled.div`
  margin-bottom: 32px;
`;

export const EquipmentTitle = styled.h3`
  color: var(--Main, #101828);
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 120% */

  margin-bottom: 32px;
`;

export const EquipmentMainTitle = styled.h2`
  color: #101828;

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

export const EquipmentList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 10px;
`;

export const EquipmentItem = styled.li`
  list-style: none;
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

// type
export const TypeWrapper = styled.div`
  margin-bottom: 40px;
`;

export const TypeTitle = styled.h2`
  color: var(--Main, #101828);
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 120% */
`;

export const TypeList = styled.ul`
  display: flex;
  gap: 10px;
`;

export const TypeItem = styled.li`
  list-style: none;
  display: flex;
`;

//button
export const Button = styled.button`
  display: flex;
  width: 166px;
  padding: 16px 60px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: var(--White, #fff);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.08px;

  border-radius: 200px;
  background: var(--Button, #e44848);
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #d84343;
  }
`;
