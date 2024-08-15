import { Icon } from "@iconify/react";
import "./content.css";
import { ReactTyped } from "react-typed";

const cv = "./assets/HaTrungTrien_CV.pdf";
const HomeContent = () => {
    const handleDownloadCV = () => {
        const link = document.createElement("a");
        link.href = cv;
        link.download = "HaTrungTrien_CV.pdf";
        link.click();
    };
    return (
        <section id="about" className="home-container">
            <div className="home-content">
                <h2>
                    Hi I&apos;m <span>Trien</span>
                </h2>
                <h3>
                    I am a{" "}
                    <ReactTyped
                        strings={[
                            "Frontend Developer",
                            "Backend Developer",
                            "Full Stack Developer",
                            "UI/UX Designer",
                        ]}
                        className="react-typed"
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                    />
                </h3>
                <p>
                    Passionate Frontend Developer | Transforming ideas into
                    Seamless and Visually Stunning Web Solutions
                </p>
                <button onClick={handleDownloadCV} className="download-cv-btn">
                    CV
                    <Icon className="cv-icon" icon="pepicons-pop:cv"  style={{color: "white"}} />
                </button>
            </div>
            <div className="home-img">
                <div>
                    <div className="tech-icon">
                        <img src="./assets/images/tech/react.png" alt="react" />
                    </div>{" "}
                    <img
                        src="./assets/images/avatar.png"
                        alt="avatar"
                        className="avatar"
                    />
                </div>
                <div>
                    <div className="tech-icon">
                        <img src="./assets/images/tech/html.png" alt="html" />
                    </div>
                    <div className="tech-icon">
                        <img src="./assets/images/tech/css.png" alt="css" />
                    </div>
                    <div className="tech-icon">
                        <img
                            src="./assets/images/tech/nodejs.png"
                            alt="nodejs"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeContent;
