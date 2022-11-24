import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="app__contact-container standard__text-font app__contact-bg section__padding">
      <h1>
        Dont worry for contact, <br /> i`m always be there for you!
      </h1>
      <p>
        <a href="https://www.facebook.com/RazuTheClumsyGuy" target="_blank">
          <button className="custom_btn">Contact Me</button>
        </a>
      </p>
    </div>
  );
};

export default Contact;
