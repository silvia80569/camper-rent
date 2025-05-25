/* eslint-disable no-unused-vars */
import { useState } from "react";
import Button from "../../Button/Button";
import styles from "./ContactForm.module.css";

const ContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    comments: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is not valid.";
    }
    if (!formData.date) newErrors.date = "Reservation date is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors({});
    setSubmitted(false);
    setSubmitError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await onSubmit(formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", date: "", comments: "" });
    } catch (error) {
      setSubmitError("An error occurred while submitting the form.");
    }
  };

  return (
    <section className={styles.contactSection}>
      <h2 className={styles.title}>Get in Touch!</h2>
      <p>Fill out the form and our team will contact you shortly.</p>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.field}>
          <label htmlFor="name">Nume*</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className={styles.error}>{errors.name}</span>}
        </div>

        <div className={styles.field}>
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </div>

        <div className={styles.field}>
          <label htmlFor="date">Reservation Date*</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          {errors.date && <span className={styles.error}>{errors.date}</span>}
        </div>

        <div className={styles.field}>
          <label htmlFor="comments">Comments</label>
          <textarea
            id="comments"
            name="comments"
            rows="4"
            value={formData.comments}
            onChange={handleChange}
          />
        </div>

        <Button>Submit</Button>

        {submitted && (
          <p className={styles.success}>
            Your reservation has been submitted successfully!
          </p>
        )}

        {submitError && <p className={styles.error}>{submitError}</p>}
      </form>
    </section>
  );
};

export default ContactForm;
