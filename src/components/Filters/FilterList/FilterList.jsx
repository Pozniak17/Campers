/* eslint-disable react/prop-types */
import ButtonFilter from "../ButtonFilter/ButtonFilter";
import EquipmentFilter from "../EquipmentFilter/EquipmentFilter";
import TypeFilter from "../TypeFilter/TypeFilter";
import LocationFilter from "../LocationFilter/LocationFilter";
import { Wrapper } from "./FilterList.module";

// eslint-disable-next-line no-unused-vars
export default function FilterList({ value, onFilter }) {
  return (
    <Wrapper>
      <LocationFilter value={value} onFilter={onFilter} />
      <EquipmentFilter />
      <TypeFilter />
      <ButtonFilter />
    </Wrapper>
  );
}
