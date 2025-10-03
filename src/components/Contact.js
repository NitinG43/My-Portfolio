import "../styles/Contact.css";
import emailjs from "@emailjs/browser";
import { useState, forwardRef, useRef } from "react";
import { Flash } from "../components/Flash";

export const Contact = forwardRef((props, ref) => {
  let [user, setUser] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });
  let [flash_apear, setFlash] = useState(false);

  let form = useRef();

  function setState(event) {
    event.preventDefault();
    setUser((pre) => {
      return { ...pre, [event.target.name]: event.target.value };
    });
  }

  const sendEmail = (event) => {
    event.preventDefault();
    setFlash(true);

    emailjs
      .sendForm(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        form.current,
        { publicKey: process.env.PUBLIC_KEY }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setUser({
            email: "",
            name: "",
            subject: "",
            message: "",
          });
          setTimeout(() => {
            setFlash(false);
          }, 7000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      {flash_apear && (
        <div className="flash-msg">
          <button id="flash-close" onClick={() => setFlash(false)}>
            X
          </button>
          <Flash />
        </div>
      )}
      <div className="contact" ref={ref}>
        <h1>Contact</h1>
        <p>Feel free to reach out to me for any questions or opportunities!</p>
        <div className="contact-form">
          <h1>Email me</h1>
          <form action="" ref={form} onSubmit={sendEmail}>
            <input
              className="contact-input"
              onChange={setState}
              type="email"
              value={user.email}
              name="email"
              placeholder="Enter Your Email"
            />
            <input
              className="contact-input"
              onChange={setState}
              type="text"
              value={user.name}
              name="name"
              placeholder="Enter Your Name"
            />
            <input
              className="contact-input"
              onChange={setState}
              type="text"
              value={user.subject}
              name="subject"
              placeholder="Enter Subject"
            />
            <textarea
              className="contact-textarea"
              onChange={setState}
              value={user.message}
              name="message"
              placeholder="Type Message"
              cols="30"
              rows="10"
            ></textarea>
            <button id="send-button">Send</button>
          </form>
        </div>
      </div>
    </>
  );
});
