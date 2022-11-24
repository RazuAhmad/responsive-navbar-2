import React from "react";
import "./Feedback.css";
import client1 from "../../Images/bradly-erickson.jpg";
import client2 from "../../Images/david-katherin.jpg";
import client3 from "../../Images/jonathan brown.jpg";

const Feedback = () => {
  return (
    <div className="app__feedback-container app__contact-bg section__padding standard__text-font">
      <h1>
        Some Possitive Feedback <br /> That Encourage Us
      </h1>
      <div className="app__feedback-clients">
        <div className="client">
          <div className="client_introduction">
            <div className="client-img">
              <img src={client1} alt="client1" />
            </div>
            <div className="client-text">
              <h3>Bradly Erickson</h3>
              <p>UI/UX Designer</p>
            </div>
          </div>
          <div className="client_feedback-description">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Distinctio, rem adipisci labore esse accusantium totam facere et
              quasi pariatur deserunt nihil nemo laudantium laboriosam expedita.
            </p>
          </div>
        </div>
        <div className="client">
          <div className="client_introduction">
            <div className="client-img">
              <img src={client2} alt="client2" />
            </div>
            <div className="client-text">
              <h3>Davide Katherine</h3>
              <p>Backend Developer</p>
            </div>
          </div>
          <div className="client_feedback-description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              nulla repellat voluptatem nobis debitis rerum unde distinctio
              tenetur eaque, dolor aliquam provident. Amet, sunt id?
            </p>
          </div>
        </div>
        <div className="client">
          <div className="client_introduction">
            <div className="client-img">
              <img src={client3} alt="client3" />
            </div>
            <div className="client-text">
              <h3>Jonathan Brown</h3>
              <p>React Native Developer</p>
            </div>
          </div>
          <div className="client_feedback-description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              ducimus, maiores beatae quia omnis labore, totam dicta laboriosam
              sapiente cumque nam! Similique facilis iusto quis!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
