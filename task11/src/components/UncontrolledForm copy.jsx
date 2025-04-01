import { useRef } from "react";
import styles from "./Form.module.css";

const UncontrolledForm = () => {
  const nameRef = useRef();
  const passwordRef = useRef();
  const dateRef = useRef();
  const maleRef = useRef();
  const femaleRef = useRef();
  const ageRef = useRef();
  const aboutRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: nameRef.current.value,
      password: passwordRef.current.value,
      date: dateRef.current.value,
      sex: maleRef.current.checked ? "male" : femaleRef.current.checked ? "female" : "",
      age: ageRef.current.value,
      about: aboutRef.current.value,
    };
    console.log("Form Data Submitted:", formData);
  };

  return (
    <form className={styles["form-container"]} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Enter your name</label>
        <input type="text" name="name" ref={nameRef} required />
      </div>
      <div>
        <label htmlFor="password">Enter password</label>
        <input type="password" name="password" ref={passwordRef} required />
      </div>
      <div>
        <label htmlFor="date">Enter your date of birth</label>
        <input type="date" name="date" ref={dateRef} required />
      </div>
      <div>
        <label>Choose Your Sex</label>
        <div className={styles["radio-group"]}>
          <input type="radio" id="male" name="sex" value="male" ref={maleRef} />
          <label htmlFor="male">Male</label>
          <input type="radio" id="female" name="sex" value="female" ref={femaleRef} />
          <label htmlFor="female">Female</label>
        </div>
      </div>
      <div>
        <label htmlFor="age">Enter Your Age</label>
        <input type="number" name="age" ref={ageRef} min="0" max="100" required />
      </div>
      <div>
        <label htmlFor="about">Description</label>
        <textarea name="about" ref={aboutRef} cols="80" rows="5"></textarea>
      </div>
      <div>
        <button className={styles["submit-button"]} type="submit">Submit</button>
      </div>
    </form>
  );
};

export default UncontrolledForm;

