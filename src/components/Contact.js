import React from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { useFormik } from "formik";
import { useRef } from "react";

const validate = (values) => {
  const errors = {};
  if (!values.subject) {
    errors.subject = "Subject is a required field";
  }
  if (!values.name) {
    errors.name = " Name is a required field";
  }
  if (!values.email) {
    errors.email = "Email is a required field";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.message) {
    errors.message = "Message is a required field";
  }
  return errors;
};

function ContactForm() {
  const form = useRef();
  const formik = useFormik({
    initialValues: {
      subject: "",
      name: "",
      email: "",
      message: "",
    },
    validate,
    onSubmit: (values) => {
      let valueString = JSON.stringify(values);
      console.log(valueString);
      emailjs
        .sendForm(
          "service_666aw17",
          "template_aeup5uq",
          form.current,
          "user_3SoMLZGL9ihSylRysiywE"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
        formik.resetForm();
    },
  });
  return (
    <div className="container">
      <form ref={form} onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="subject">Subject *</label>
          <select name="subject" id="subject" value={formik.values.subject} onChange={formik.handleChange}>
            <option value="">--Please choose an option--</option>
            <option value="Schedule an appointment">Schedule an Appointment</option>
            <option value="Schedule a phoneReview">Phone Review</option>
            <option value="Shedule a virtual meeting">Virtual Meeting</option>
            <option value="info">Request Info</option>
            <option value="general">General</option>
          </select>
          <label>Name *</label>
          <input type="text" id="name" name="name" value={formik.values.name} onChange={formik.handleChange} />
          <label>Email *</label>
          <input type="text" id="email" name="email" value={formik.values.email} onChange={formik.handleChange}/>
          <label>Phone</label>
          <input type="text" id="phone" name="phone" value={formik.values.phone} onChange={formik.handleChange}/>
          <label>Message *</label>
          <input type="text" id="message" name="message" value={formik.values.message} onChange={formik.handleChange} />
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
