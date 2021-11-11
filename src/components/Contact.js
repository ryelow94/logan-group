import React from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { useFormik } from "formik";
import { useRef } from "react";

const validate = (values) => {
  const errors = {};
  if (!values.subject) {
    errors.subject = "Required field";
  }
  if (!values.name) {
    errors.name = " Required field";
  }
  if (!values.email) {
    errors.email = "Required field";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.message) {
    errors.message = "Required field";
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
        alert("Thank you, your message has been sent")
    },
  });
  return (
    <div className="container">
      <form ref={form} onSubmit={formik.handleSubmit}>
        <div>
        {formik.errors.subject ? <div className="required-field">{formik.errors.subject}</div> : null}
          <label htmlFor="subject">Subject </label>
          <select name="subject" id="subject" value={formik.values.subject} onChange={formik.handleChange}>
            <option value="">--Please choose an option--</option>
            <option value="Schedule an appointment">Schedule an Appointment</option>
            <option value="Schedule a phoneReview">Phone Review</option>
            <option value="Shedule a virtual meeting">Virtual Meeting</option>
            <option value="info">Request Info</option>
            <option value="general">General</option>
          </select>
          {formik.errors.name ? <div className="required-field">{formik.errors.name}</div> : null}
          <label>Name </label>
          <input type="text" id="name" name="name" value={formik.values.name} onChange={formik.handleChange} />
          {formik.errors.email ? <div className="required-field"> {formik.errors.email}</div> : null}
          <label>Email </label>
          <input type="text" id="email" name="email" value={formik.values.email} onChange={formik.handleChange}/>
          <label>Phone</label>
          <input type="text" id="phone" name="phone" value={formik.values.phone} onChange={formik.handleChange}/>
          {formik.errors.message ? <div className="required-field">{formik.errors.message}</div> : null}
          <label>Message </label>
          <input type="text" id="message" name="message" value={formik.values.message} onChange={formik.handleChange} />
          {formik.errors ? <div className="required-field"> All required fields must be entered before submitting</div> : null}
          <br></br>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
