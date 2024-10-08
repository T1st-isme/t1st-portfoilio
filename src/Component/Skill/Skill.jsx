import { useState } from "react";
import { SkillData } from "../../Utils/data";
import "./Skill.css";
import SkillCard from "./SkillCard/SkillCard";
import SkillInfoCard from "./SkillInfoCard/SkillInfoCard";

const Skill = () => {
    const [activeSkill, setActiveSkill] = useState(SkillData[0]);

    const handleSkillClick = (skill) => {
        setActiveSkill(skill);
    };
    return (
        <section id="skill" className="skill-container">
            <h5>Technical Proficiency</h5>
            <p className="skill-description">
                Here are some of my skills on which I have been working on for
                the past 2 years.
            </p>
            <div className="skill-content">
                <div className="skills">
                    {SkillData.map((skill) => (
                        <SkillCard
                            key={skill.title}
                            title={skill.title}
                            iconUrl={skill.iconUrl}
                            isActive={skill.title === activeSkill.title}
                            onClick={() => handleSkillClick(skill)}
                        />
                    ))}
                </div>
                <div className="skills-info">
                    <SkillInfoCard
                        heading={activeSkill.title}
                        skills={activeSkill.skills}
                    />
                </div>
            </div>
        </section>
    );
};

export default Skill;
