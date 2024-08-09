import "./project.css";
import { useState } from "react";
import { ProjectData } from "../../Utils/data";
import ProjectModal from "./project_modal";

const Project = () => {
    const [toggle, setToggle] = useState("all");
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedProject(null);
    };

    return (
        <div id="project" className="project-container">
            <div className="project-wrapper">
                <h1 className="project-title">Projects</h1>
                <p className="project-desc">
                    I have worked on a wide range of projects. From web apps to
                    android apps. Here are some of my projects.
                </p>
                <div className="project-toggle-button-group">
                    <button
                        className={`project-toggle-button ${
                            toggle === "all" ? "active" : ""
                        }`}
                        onClick={() => setToggle("all")}
                    >
                        All
                    </button>
                    <button
                        className={`project-toggle-button ${
                            toggle === "web app" ? "active" : ""
                        }`}
                        onClick={() => setToggle("web app")}
                    >
                        WEB APP&apos;S
                    </button>
                    <button
                        className={`project-toggle-button ${
                            toggle === "mobile app" ? "active" : ""
                        }`}
                        onClick={() => setToggle("mobile app")}
                    >
                        MOBILE APP&apos;S
                    </button>
                </div>
                <div className="project-card-container">
                    {ProjectData.filter(
                        (item) => toggle === "all" || item.category === toggle
                    ).map((item) => (
                        <div
                            className="project-card"
                            key={item.id}
                            onClick={() => openModal(item)}
                        >
                            <img src={item.image} alt={item.title} />
                            <h3 className="project-modal-title">
                                {item.title}
                            </h3>
                            <p className="project-modal-description">
                                {item.description}
                            </p>
                            <div className="tags">
                                {item.tags.map((tag, index) => (
                                    <span className="tag" key={index}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <ProjectModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                project={selectedProject}
            />
        </div>
    );
};

export default Project;
