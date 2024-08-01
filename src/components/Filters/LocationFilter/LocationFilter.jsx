/* eslint-disable react/prop-types */
import { Input, Title, Wrapper } from "./LocationFilter.module";

export default function LocationFilter({ value, onFilter }) {
  return (
    <Wrapper>
      <Title>Location</Title>
      <Input
        name="location"
        type="text"
        placeholder="City"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </Wrapper>
  );
}
