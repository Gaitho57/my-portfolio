import React from "react";
import "./Work.css";
export default function Work() {
  return (
    <>
      <div className="work-inside-new mx2 my4">
        <div className="d-flex flex-column">
          <div className="d-flex flex-row justify-content-between">
            <span className="company-name">Freelance Software Developer</span>
            <span className="year-passedout">2023-present</span>
          </div>
        </div>
        <div className="d-flex flex-column">
          <span className="position">Full Stack Developer</span>
          <span className="description-position">
            <ul>
              <li>Implemented secure payment gateways for seamless transactions.</li>
              <li>Integrated responsive design principles to ensure optimal user experience across various devices..</li>
              <li>
                Collaborate  for project success.
              </li>
            </ul>
          </span>
        </div>
      </div>
    </>
  );
}

