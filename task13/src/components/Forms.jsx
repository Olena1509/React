import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Forms = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  return (
    <Formik
      initialValues={{ name: "", email: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <label>Name:</label>
        <Field type="text" name="name" />
        <ErrorMessage name="name" component="div" />

        <label>Email:</label>
        <Field type="email" name="email" />
        <ErrorMessage name="email" component="div" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default Forms;

