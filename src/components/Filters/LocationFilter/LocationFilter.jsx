import { Input, Title, Wrapper } from "./LocationFilter.module";

export default function LocationFilter() {
  return (
    <Wrapper>
      <Title>Location</Title>
      <Input placeholder="City" />
    </Wrapper>
  );
}
