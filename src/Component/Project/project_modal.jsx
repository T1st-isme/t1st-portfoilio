import Modal from "react-modal";

const ProjectModal = ({ isOpen, onRequestClose, project }) => {
    if (!project) return null;

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Project Details"
            className="project-modal"
            overlayClassName="project-modal-overlay"
        >
            <div className="project-modal-content">
                <button className="close-button" onClick={onRequestClose}>
                    &times;
                </button>
                <img
                    src={project.image}
                    alt={project.title}
                    className="project-modal-image"
                />
                <h2>{project.title}</h2>
                <p>{project.date}</p>
                <div className="tags">
                    {project.tags.map((tag, index) => (
                        <span className="tag" key={index}>
                            {tag}
                        </span>
                    ))}
                </div>
                <p>{project.description}</p>
                <div className="modal-buttons">
                    <a
                        className="btn_view_code"
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {/* <img
                            src="./assets/images/tech/github.png"
                            alt="Code Icon"
                            className="btn_view_code_icon"
                        /> */}
                        View Code
                    </a>
                    <a
                        className="btn_view_live"
                        href={project.webapp}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Live App
                    </a>
                </div>
            </div>
        </Modal>
    );
};

export default ProjectModal;
