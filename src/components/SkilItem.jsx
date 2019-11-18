import React from "react";

export const SkillItem = ({ icon, title, description }) => {
  return (
    <div className="skills__item">
      <div className="skills__icon">
        <img src={icon} alt="skill icon" />
      </div>
      <div className="skills__title">{title}</div>
      <div className="skills__description">{description}</div>
    </div>
  );
};
