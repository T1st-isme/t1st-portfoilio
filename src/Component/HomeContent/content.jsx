import "./content.css";

const HomeContent = () => {
    return (
        <section id="about" className="home-container">
            <div className="home-content">
                <h2>Building Digital Experiences That Inspire</h2>
                <p>
                    Passionate Frontend Developer | Transforming ideas into
                    Seamless and Visually Stunning Web Solutions
                </p>
            </div>
            <div className="home-img">
                <div>
                    <div className="tech-icon">
                        <img src="./assets/images/tech/react.png" alt="react" />
                    </div>{" "}
                    <img
                        src="public/assets/avatar.jpg"
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
