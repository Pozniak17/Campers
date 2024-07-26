/* eslint-disable react/prop-types */
import { Form, Formik } from "formik";
import ButtonFilter from "../ButtonFilter/ButtonFilter";
import EquipmentFilter from "../EquipmentFilter/EquipmentFilter";
import TypeFilter from "../TypeFilter/TypeFilter";
import LocationFilter from "../LocationFilter/LocationFilter";
import { Wrapper } from "./FilterList.module";

export default function FilterList({ items }) {
  const initialValues = {
    location: "",
    // airConditioner: false,
    // transmission: true,
    // kitchen: false,
    // TV: false,
    // shower: false,
  };

  const handleSubmit = (values) => {
    const visibleTasks = items.filter((item) =>
      item.location.toLowerCase().includes(values.toLowerCase())
    );

    console.log(visibleTasks);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
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
