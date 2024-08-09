import "./navbar.css";
import { useState } from "react";
import MobileNav from "./MobileNav/mobileNav";

const Navbar = () => {
    const logo = "./assets/images/logo.png";
    const handleDownload = () => {
        console.log("Downloading CV");
    };

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <MobileNav isOpen={isOpen} toggleMenu={toggleMenu} />
            <nav className="nav-wrapper">
                <div className="nav-content">
                    <img className="logo" src={logo} alt="logo" />

                    <ul>
                        <li>
                            <a className="menu-item" href="#about">
                                Home
                            </a>
                        </li>
                        <li>
                            <a className="menu-item" href="#skill">
                                Skills
                            </a>
                        </li>
                        <li>
                            <a className="menu-item" href="#project">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a className="menu-item" href="#contact">
                                Contact
                            </a>
                        </li>
                        <button
                            className="contact-btn"
                            onClick={handleDownload}
                        >
                            Hire Me
                        </button>
                    </ul>
                    <button className="menu-btn" onClick={toggleMenu}>
                        <span
                            className={"material-symbols-outlined"}
                            style={{ fontSize: "2rem" }}
                        >
                            {isOpen ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
