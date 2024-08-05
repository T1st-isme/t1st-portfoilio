import React from "react";
import "./SkillInfoCard.css";

const SkillInfoCard = ({ heading, skills }) => {
    return (
        <div className="skill-info-card">
            <h6>{heading}</h6>
            <div className="skill-info-content">
                {skills.map((item, index) => (
                    <React.Fragment key={`skill_${index}`}>
                        <div className="skill-info">
                            <p>{item.skill}</p>
                            <p className="percentage">{item.percentage}</p>
                        </div>
                        <div className="skill-info-bg">
                            <div
                                className="skill-info-bar"
                                style={{ width: `${item.percentage}` }}
                            />
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default SkillInfoCard;
