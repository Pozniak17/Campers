/* eslint-disable react/prop-types */
// import { Icon } from "../../shared/Icon";
import {
  IconStyled,
  Input,
  InputWrapper,
  Title,
  Wrapper,
} from "./LocationFilter.styled";

export default function LocationFilter() {
  return (
    <Wrapper>
      <Title>Location</Title>

      <InputWrapper>
        <IconStyled
          name="icon-map"
          width="20px"
          height="20px"
          color="#6C717B"
        />

        <Input name="location" type="text" placeholder="City" />
      </InputWrapper>
    </Wrapper>
  );
}
