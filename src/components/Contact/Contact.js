import React, { useEffect, useRef, useState } from "react";
import "./Contacts.css";
import emailjs from "emailjs-com";
import Slide from "react-reveal/Slide";

export const Contacts = () => {
  const form = useRef();

  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o506b9r",
        "portfolio-email_f5z9cjb",
        form.current,
        "RA6xY2JsbpPyj02od"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("SUCCESS");
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  useEffect(() => {
    if (status === "SUCCESS") {
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  }, [status]);

  return (
    <div className="container" id="Contacts">
      <h1 className="title">Contacts</h1>
      <div className="contacts">
        <h3 className="sub-title">Get In Touch</h3>
        {status && renderAlert()}
        <form ref={form} onSubmit={sendEmail}>
          <div className="contact-form">
            <Slide top>
            <input
              className="input-item"
              type="text"
              placeholder="name"
              name="user_name"
            />
            <input
              className="input-item"
              type="email"
              placeholder="email"
              name="user_email"
            />
            <textarea
              className="input-item"
              name="message"
              cols="10"
              rows="7"
              placeholder="Send Message"
            ></textarea>
            </Slide>
          </div>
          <div className="contact-btn">
            <input type="submit" className="btn" value="Send" />
          </div>
        </form>
      </div>
    </div>
  );
};

const renderAlert = () => {
  return (
    <div className="alert">
      <p>You have successfully sent your message</p>
    </div>
  );
};

export default Contacts;
