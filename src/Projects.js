import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <>
      <div className="d-flex flex-column">
        <div className="project-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column project-details">
            <span className="project-name">Dharura Project</span>
            <span className="project-description">Emergency Response App</span>
          </div>
          <div>
            <span className="project-year">2023</span>
          </div>
        </div>
        <div className="project-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column project-details">
            <span className="project-name">Airbnb Clone Project</span>
            <span className="project-description">Accommodation Booking</span>
          </div>
          <div>
            <span className="project-year">2023</span>
          </div>
        </div>
        <div className="project-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column project-details">
            <span className="project-name">Portfolio Project</span>
            <span className="project-description">Personal Website</span>
          </div>
          <div>
            <span className="project-year">2023</span>
          </div>
        </div>
      </div>
    </>
  );
}

