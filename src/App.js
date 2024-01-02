import React, { useState } from "react";
import "./styles.css";
import Education from "./Education";
import Work from "./Work";
import Programming from "./Programming";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import Contact from "./contact";

export default function App() {
  const [education, seteducation] = useState(true);
  const [workhistory, setworkhistory] = useState(false);
  const [programmings, setprogrammings] = useState(false);
  const [projects, setprojects] = useState(false);

  function SetAllFalse() {
    seteducation(false);
    setworkhistory(false);
    setprogrammings(false);
    setprojects(false);
  }

  function ChangeState(function1, state1) {
    SetAllFalse();
    function1(state1);
  }
  return (
    <div className="App">
      <div className="herosection px-10 py-5">
        <nav className="d-flex flex-row justify-content-between">
          <span className="brand-name">Michael Gaitho</span>
          <div className="d-flex flex-row">
            <span className="mx-4 nav-items">Home</span>
            <span className="mx-4 nav-items">About me</span>
            <span className="mx-4 nav-items">Resume</span>
            <span className="mx-4 nav-items">Testimonial</span>
            <span className="mx-4 nav-items">Contact me</span>
          </div>
        </nav>
        <div className="herosection-2 row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex flex-column justify-content-center Im-text-section">
              <span className="Im-text">
                Hello, I'm <span className="name-Im-text">Michael Gaitho</span>
              </span>
              <span className="Im-text-enthusiastic py-2">
                Enthusiastic Dev 😎              </span>
              <span className="Im-text-subheading">
                knack of building applications with front and back end
                operations
              </span>
              <div className="d-flex flex-row justify-content-center mt-5">
                <button className="btn-hire-me">Hire me</button>
                <button className="btn-resume-me">Get Resume</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex justify-content-center Anim">
              <img
                className="img-fluid custom-img"
                alt="heroimage"
                src="https://res.cloudinary.com/dem9a1bev/image/upload/v1703752722/1695128737447_ofpcfn.jpg"
              />
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
      <div className="about-me-section aboutme-inside my-5">
        <div className="d-flex flex-column">
          <span className="about-me-text">About Me</span>
          <span className="why-text-sub">Why choose me?</span>
          <div className="row justify-content-center shadow-lg my-5">
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
              {/* Assuming you have a valid component or element for dotlottie-player */}
              {/* Make sure to import or define dotlottie-player */}
              <dotlottie-player
                src="https://lottie.host/e08902c1-77e5-4bef-8b47-57bcd9c3437b/ks1RkeLicd.json"
                background="transparent"
                speed="1"
                style={{ width: "500px", height: "500px" }}
                loop
                autoplay
              ></dotlottie-player>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 py-5 d-flex flex-column">
              <span className="some-text-about-me">
                I'm an accomplished full-stack developer excelling in the
                challenging ALX Software Engineer Program, with proficiency in
                web development, networking, and DevOps. Actively seeking a
                dynamic role to apply my diverse skill set and contribute to
                innovative projects, my commitment to excellence and
                adaptability to cutting-edge technologies positions me as a
                valuable asset for forward-thinking employers.
              </span>
              <span className="few-highlights">
                <span className="few-text"></span>
                <span className="few-list">
                  <ul>
                    <li>Fullstack Web and Mobile Development</li>
                    <li>Interactive frontend as per UI</li>
                    <li>Android studio, React Native, Flutter</li>
                    <li>Fullstack Web and Mobile Development</li>
                    <li>Node js, MongoDB (All Backend Technologies)</li>
                    <li>Docker, Kubernetes, AWS, Digitalocean</li>
                  </ul>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="resume-outer-section d-flex flex-column">
        <span
          className="about-me-text"
          style={{ width: "70%", marginInline: "auto" }}
        >
          Resume
        </span>
        <span className="why-text-sub">My formal Bio details</span>
        <div
          className="resume-new-section row"
          style={{ width: "70%", marginInline: "auto", height: "400px" }}
        >
          <div className="col-lg-4 col-md-4 col-sm-12 resume-left-section px-0 shadow-lg d-flex flex-row">
            <div className="d-flex flex-column bg-new text-white">
              <span className="icons-span">
                <i className="fas fa-graduation-cap"></i>
              </span>
              <span className="icons-span">
                <i className="fas fa-briefcase"></i>
              </span>
              <span className="icons-span">
                <i className="fas fa-code"></i>
              </span>
              <span className="icons-span">
                <i className="fas fa-desktop"></i>
              </span>
            </div>
            <div className="d-flex flex-column bg-white">
              <span
                className={
                  education === false
                    ? "resume-options-items"
                    : "selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(seteducation, true);
                }}
              >
                Education
              </span>
              <span
                className={
                  workhistory === false
                    ? "resume-options-items"
                    : "selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setworkhistory, true);
                }}
              >
                Work
              </span>
              <span
                className={
                  programmings === false
                    ? "resume-options-items"
                    : "selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setprogrammings, true);
                }}
              >
                Programming
              </span>
              <span
                className={
                  projects === false
                    ? "resume-options-items"
                    : "selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setprojects, true);
                }}
              >
                Projects
              </span>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 resume-right-section">
            {education === true && <Education />}
            {workhistory === true && <Work />}
            {programmings === true && <Programming />}
            {projects === true && <Projects />}
          </div>
        </div>
      </div>
      <div className="testimonials-part my-5">
        <div className="testimonials-inner-part d-flex flex-column">
          <span className="about-me-text">Testimonials</span>
          <span className="why-text-sub mb-5">
            what my clients say about me
          </span>
          <Testimonials />
        </div>
      </div>
      <div className="contact-me-part py-4">
        <div className="relative-bg"></div>
        <div className="contact-inner-part d-flex flex-column">
          <span className="about-me-text">Contact Me</span>
          <span className="why-text-sub mb-5">Let's Keep In Touch</span>
          <Contact />
        </div>
      </div>
    </div>
  );
}
