import React from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const ContactForm = () => {
  function handleSubmit(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_666aw17",
        "template_aeup5uq",
        e.target,
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
    e.target.reset();
  }
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Subject</label>
          <select name="subject" id="subject">
            <option value="">--Please choose an option--</option>
            <option value="appointment">Schedule an Appointment</option>
            <option value="phoneReview">Phone Review</option>
            <option value="virtual">Virtual Meeting</option>
            <option value="info">Request Info</option>
            <option value="general">General</option>
          </select>
          <label>Name</label>
          <input type="text" id="name" name="name" />
          <label>Email</label>
          <input type="text" id="email" name="email" />
          <label>Phone</label>
          <input type="text" id="phone" name="phone" />
          <label>Message</label>
          <input type="text" id="message" name="message" />
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
