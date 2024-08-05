import "./App.css";
import HomeContent from "./Component/HomeContent/content";
import Navbar from "./Component/Navbar/navbar";
import Skill from "./Component/Skill/Skill";

const App = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <HomeContent />
                <Skill />
            </div>
        </>
    );
};

export default App;
