import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

import {
  SecondWrapper,
  FormTitle,
  FormText,
  Input,
  TextField,
  Button,
} from "./CamperForm.styled";

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, "Name is too Short!")
    .max(16, "Name is too Long!")
    .required("Required"),
  email: Yup.string().email("Must be a valid email!").required("Required"),
  date: Yup.string()
    .min(4, "Date is too Short!")
    .max(16, "Date is too Long!")
    .required("Required"),
});

export const CamperForm = () => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
    window.location.reload();
  };
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        date: "",
        message: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <SecondWrapper>
        <FormTitle>Book your campervan now</FormTitle>
        <FormText>Stay connected! We are always ready to help you.</FormText>

        <Form>
          <Field as={Input} placeholder="Name" type="text" name="username" />
          <ErrorMessage name="username" component="span" />
          <Field as={Input} placeholder="Email" type="email" name="email" />
          <ErrorMessage name="email" component="span" />
          <Field
            as={Input}
            placeholder="Booking date"
            type="text"
            name="date"
          />
          <ErrorMessage name="date" component="span" />

          <Field as={TextField} placeholder="Comment" name="message" />

          <Button type="submit">Send</Button>
        </Form>
      </SecondWrapper>
    </Formik>
  );
};
