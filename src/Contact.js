import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  return (
    <>
      <div className="contact-me-card row ">
        <div className="col-lg-6 col-md-5 col-sm-12 left-contact px-2 py-2">
          <span className="get-in-touch mx-4 my-5">Get in touch</span>
          <div className="py-5 d-flex justify-content-center">
            <dotlottie-player
              src="https://lottie.host/f899636a-efb7-426b-a97f-95a1b447fbd0/xFA2zIBIrh.json"
              background="transparent"
              speed="1"
              style={{ width: "300px", height: "300px" }}
              loop
              autoplay
            ></dotlottie-player>
          </div>
        </div>
        <div className="col-lg-6 col-md-5 col-sm-12 my-auto">
          <div className="d-flex flex-column card-contact-right">
            <div className="input-group my-3 d-flex flex-column">
              <label>Name</label>
              <input
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                }}
                type="text"
                placeholder="enter your name"
                className="input-groups"
              />
            </div>
            <div className="input-group my-3 d-flex flex-column">
              <label>Email</label>
              <input
                type="text"
                placeholder="enter your email"
                className="input-groups"
              />
            </div>
            <div className="input-group my-3 d-flex flex-column">
              <label>Message</label>
              <input
                type="text"
                placeholder="enter your message"
                className="input-groups"
              />
            </div>
            <div className="input-group my-3 d-flex flex-column">
              <button className="btn btn-success">Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
