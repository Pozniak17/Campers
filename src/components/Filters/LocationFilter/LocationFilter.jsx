/* eslint-disable react/prop-types */
import { Input, Title, Wrapper } from "./LocationFilter.styled";

export default function LocationFilter() {
  return (
    <Wrapper>
      <Title>Location</Title>
      <Input
        name="location"
        type="text"
        placeholder="City"
        // value={locationValue}
        // onChange={handleFilterChange}
      />
    </Wrapper>
  );
}
