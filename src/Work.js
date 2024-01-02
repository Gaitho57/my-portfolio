import React from "react";
import "./Work.css";
export default function Work() {
  return (
    <>
      <div className="work-inside-new mx2 my4">
        <div className="d-flex flex-column">
          <div className="d-flex flex-row justify-content-between">
            <span className="company-name">Company</span>
            <span className="year-passedout">2021-present</span>
          </div>
        </div>
        <div className="d-flex flex-column">
          <span className="position">Full Stack Developer</span>
          <span className="description-position">
            <ul>
              <li>Develop and deploy high-quality software solutions.</li>
              <li>Identify and troubleshoot technical challenges.</li>
              <li>
                Collaborate with cross-functional teams for project success.
              </li>
            </ul>
          </span>
        </div>
      </div>
    </>
  );
}

