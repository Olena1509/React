import { useState } from "react";
import styles from "./Form.module.css";

const ControlledForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    date: "",
    sex: "",
    age: "",
    about: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <form className={styles["form-container"]} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Enter your name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="password">Enter password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="date">Enter your date of birth</label>
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
      </div>
      <div>
        <label>Choose Your Sex</label>
        <div className={styles["radio-group"]}>
          <input type="radio" id="male" name="sex" value="male" checked={formData.sex === "male"} onChange={handleChange} />
          <label htmlFor="male">Male</label>
          <input type="radio" id="female" name="sex" value="female" checked={formData.sex === "female"} onChange={handleChange} />
          <label htmlFor="female">Female</label>
        </div>
      </div>
      <div>
        <label htmlFor="age">Enter Your Age</label>
        <input type="number" name="age" value={formData.age} onChange={handleChange} min="0" max="100" required />
      </div>
      <div>
        <label htmlFor="about">Description</label>
        <textarea name="about" value={formData.about} onChange={handleChange} cols="80" rows="5"></textarea>
      </div>
      <div>
        <button className={styles["submit-button"]} type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ControlledForm;
