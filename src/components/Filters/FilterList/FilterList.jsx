import ButtonFilter from "../ButtonFilter/ButtonFilter";
import EquipmentFilter from "../EquipmentFilter/EquipmentFilter";
import LocationFilter from "../LocationFilter/LocationFilter";
import TypeFilter from "../TypeFilter/TypeFilter";
import { Wrapper } from "./FilterList.module";

export default function FilterList() {
  return (
    <Wrapper>
      <LocationFilter />
      <EquipmentFilter />
      <TypeFilter />
      <ButtonFilter />
    </Wrapper>
  );
}
