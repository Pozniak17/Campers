/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import ButtonFilter from "../ButtonFilter/ButtonFilter";
// import { EquipmentFilter } from "../EquipmentFilter/EquipmentFilter";
import TypeFilter from "../TypeFilter/TypeFilter";
import LocationFilter from "../LocationFilter/LocationFilter";
import { Wrapper } from "./FilterList.styled";
import { EquipmentFilter } from "../EquipmentFilter/EquipmentFilter";

// eslint-disable-next-line no-unused-vars
export default function FilterList() {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(evt);
  };
  return (
    <Wrapper onSubmit={handleSubmit}>
      <LocationFilter />
      <EquipmentFilter />
      <TypeFilter />
      <ButtonFilter />
    </Wrapper>
  );
}
