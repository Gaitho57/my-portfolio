import React from "react";
import "./Education.css";
export default function Education() {
  return (
    <>
      <div className="d-flex flex-column">
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">ALX</span>
            <span className="university-degree">
              Software Engineering - Fullstack
            </span>
          </div>
          <div>
            <span className="year-passedout">2023-2024</span>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">Kabarak University</span>
            <span className="university-degree">
              Bachelor of Science Environemntal Science
            </span>
          </div>
          <div>
            <span className="year-passedout">2014-2016</span>
          </div>
        </div>
      </div>
    </>
  );
}
