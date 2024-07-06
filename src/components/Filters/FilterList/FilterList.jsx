import { Form, Formik } from "formik";
import ButtonFilter from "../ButtonFilter/ButtonFilter";
import EquipmentFilter from "../EquipmentFilter/EquipmentFilter";
import LocationFilter from "../LocationFilter/LocationFilter";
import TypeFilter from "../TypeFilter/TypeFilter";
import { Wrapper } from "./FilterList.module";

export default function FilterList() {
  const initialValues = {
    location: "",
  };

  return (
    <Formik initialValues={initialValues} onSubmit={() => {}}>
      <Form>
        <Wrapper>
          <LocationFilter />
          <EquipmentFilter />
          <TypeFilter />
          <ButtonFilter />
        </Wrapper>
      </Form>
    </Formik>
  );
}
