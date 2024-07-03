import EquipmentFilter from "../EquipmentFilter/EquipmentFilter";
import LocationFilter from "../LocationFilter/LocationFilter";
import { Wrapper } from "./FilterList.module";

export default function FilterList() {
  return (
    <Wrapper>
      <LocationFilter />
      <EquipmentFilter />
    </Wrapper>
  );
}
