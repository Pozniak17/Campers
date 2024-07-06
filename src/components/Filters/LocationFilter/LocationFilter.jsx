import { Input, Title, Wrapper } from "./LocationFilter.module";

export default function LocationFilter() {
  return (
    <Wrapper>
      <Title>Location</Title>
      <Input name="location" type="text" placeholder="City" />
    </Wrapper>
  );
}
