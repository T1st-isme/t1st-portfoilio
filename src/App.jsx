import "./App.css";
import HomeContent from "./Component/HomeContent/content";
import Navbar from "./Component/Navbar/navbar";
import Skill from "./Component/Skill/Skill";
import Education from "./Component/Education/Education";
import Project from "./Component/Project/project";
import Footer from "./Component/Footer/footer";
import Contact from "./Component/Contact/contact";
const App = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <HomeContent />
                <br />
                <Skill />
                <br />
                <Project />
                <br />
                <Education />
                <br />
                <Contact />
            </div>
            <Footer />
        </>
    );
};

export default App;
