/* eslint-disable react/prop-types */
import { locationFilter } from "../../../redux/filtersSlice";
import { Input, Title, Wrapper } from "./LocationFilter.module";
import { useDispatch, useSelector } from "react-redux";
// import { setLocationFilter } from "../../../redux/store";

export default function LocationFilter() {
  const locationValue = useSelector((state) => state.filters.locationFilter);
  // console.log(locationValue);
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(locationFilter(e.target.value));
  };
  return (
    <Wrapper>
      <Title>Location</Title>
      <Input
        name="location"
        type="text"
        placeholder="City"
        value={locationValue}
        onChange={handleFilterChange}
      />
    </Wrapper>
  );
}
