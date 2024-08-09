import "./Education.css";
import { EducationData } from "../../Utils/data";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
    return (
        <div id="education" className="education-container">
            <h1 className="education-title">Education</h1>
            <p className="education-description">
                My education has been a journey of self-discovery and growth. My
                educational details are as follows.
            </p>

            <div className="education-timeline">
                <VerticalTimeline animate={true}>
                    {EducationData.map((edu) => (
                        <VerticalTimelineElement
                            key={edu.id}
                            date={edu.period}
                            icon={
                                <div className="timeline-icon">
                                    <img src={edu.iconUrl} alt={edu.title} />
                                </div>
                            }
                            iconStyle={{ background: "#7c5fe6", color: "#fff" }}
                            contentStyle={{
                                background: "rgba(22, 17, 47, 0.8)",
                                color: "#fff",
                                borderRadius: "8px",
                                border: "1px solid #7c5fe6",
                            }}
                            contentArrowStyle={{
                                borderRight: "7px solid #7c5fe6",
                            }}
                        >
                            <h3 className="vertical-timeline-element-title">
                                {edu.title}
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle">
                                {edu.name}
                            </h4>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default Education;
