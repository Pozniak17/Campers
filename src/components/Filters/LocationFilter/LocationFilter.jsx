/* eslint-disable react/prop-types */
import { useState } from "react";
import { Input, Title, Wrapper } from "./LocationFilter.module";

export default function LocationFilter() {
  const [locationFilter, setLocationFilter] = useState("");
  return (
    <Wrapper>
      <Title>Location</Title>
      <Input
        name="location"
        type="text"
        placeholder="City"
        value={locationFilter}
        onChange={(e) => setLocationFilter(e.target.value)}
      />
    </Wrapper>
  );
}
