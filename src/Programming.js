import React from "react";
import "./Programming.css";

export default function Programming() {
  const value = [
    { text: "JavaScript", percentage: 80 },
    { text: "Python", percentage: 80 },
    { text: "Node JS", percentage: 80 },
    { text: "React JS", percentage: 80 },
  ];

  return (
    <div>
      <div className="row">
        {value.map((value, index) => (
          <div className="col-lg-6 col-md-6 col-sm-12 my-12" key={index}>
            <span className="language">{value.text}</span>
            <div className="progress-some">
              <div
                className="progress-new"
                style={{ width: `${value.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

