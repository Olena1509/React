import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./Form.module.css";

const validationSchema = Yup.object({
  name: Yup.string().min(2, "Мінімум 2 символи").required("Обов’язкове поле"),
  password: Yup.string().min(6, "Мінімум 6 символів").required("Обов’язкове поле"),
  date: Yup.date().required("Оберіть дату"),
  sex: Yup.string().required("Оберіть стать"),
  age: Yup.number().min(1, "Мінімум 1 рік").max(100, "Максимум 100 років").required("Обов’язкове поле"),
  about: Yup.string().min(10, "Мінімум 10 символів").required("Обов’язкове поле"),
});

const FormikForm = () => {
  return (
    <Formik
      initialValues={{ name: "", password: "", date: "", sex: "", age: "", about: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log("Form Data Submitted:", values);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form className={styles["form-container"]}>
          <div>
            <label htmlFor="name">Enter your name</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" className={styles.error} />
          </div>
          <div>
            <label htmlFor="password">Enter password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" className={styles.error} />
          </div>
          <div>
            <label htmlFor="date">Enter your date of birth</label>
            <Field type="date" name="date" />
            <ErrorMessage name="date" component="div" className={styles.error} />
          </div>
          <div>
            <label>Choose Your Sex</label>
            <div className={styles["radio-group"]}>
              <label>
                <Field type="radio" name="sex" value="male" />
                Male
              </label>
              <label>
                <Field type="radio" name="sex" value="female" />
                Female
              </label>
            </div>
            <ErrorMessage name="sex" component="div" className={styles.error} />
          </div>
          <div>
            <label htmlFor="age">Enter Your Age</label>
            <Field type="number" name="age" min="0" max="100" />
            <ErrorMessage name="age" component="div" className={styles.error} />
          </div>
          <div>
            <label htmlFor="about">Description</label>
            <Field as="textarea" name="about" cols="80" rows="5" />
            <ErrorMessage name="about" component="div" className={styles.error} />
          </div>
          <div>
            <button className={styles["submit-button"]} type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
