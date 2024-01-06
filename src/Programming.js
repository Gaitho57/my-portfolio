import React from "react";
import "./Programming.css";

export default function Programming() {
  const programmingSkills = [
    { text: "JavaScript", percentage: 80 },
    { text: "Python", percentage: 80 },
    { text: "Node.js", percentage: 80 },
    { text: "React.js", percentage: 80 },
    { text: "Django", percentage: 80 },
    { text: "Flask", percentage: 80 },
    { text: "C Language", percentage: 80 },
  ];

  const serverManagementSkills = [
    { text: "Puppet", percentage: 70, description: "Configuration management" },
    { text: "Nginx", percentage: 70, description: "Web server configuration" },
    { text: "Shell Scripting", percentage: 75, description: "Automation and scripting" },
  ];

  const databaseSkills = [
    { text: "MySQL", percentage: 80 },
    { text: "MongoDB", percentage: 80 },
  ];

  // Add other skill categories as needed

  return (
    <div>
      <div className="row">
        {renderSkillGroup(programmingSkills)}
        {renderSkillGroup(serverManagementSkills)}
        {renderSkillGroup(databaseSkills)}
        {/* Add other skill groups as needed */}
      </div>
    </div>
  );
}

function renderSkillGroup(skillGroup) {
  return skillGroup.map((item, index) => (
    <div className="col-lg-6 col-md-6 col-sm-12 my-12" key={index}>
      <span className="language">{item.text}</span>
      <div className="progress-some">
        <div
          className="progress-new"
          style={{ width: `${item.percentage}%` }}
        />
      </div>
      {item.description && <p className="skill-description">{item.description}</p>}
    </div>
  ));
}
