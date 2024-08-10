import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Bio } from "../../Utils/data.js";
import { X } from "@mui/icons-material";

const Footer = () => {
    return (
        <div className="footer-container">
            <footer className="footer-wrapper">
                <h1 className="footer-logo">{Bio.name}</h1>
                <nav className="footer-nav">
                    <a className="footer-nav-link" href="#about">
                        About
                    </a>
                    <a className="footer-nav-link" href="#skills">
                        Skills
                    </a>
                    {/* <a className="footer-nav-link" href="#experience">
                        Experience
                    </a> */}
                    <a className="footer-nav-link" href="#project">
                        Projects
                    </a>
                    <a className="footer-nav-link" href="#education">
                        Education
                    </a>
                </nav>
                <div className="footer-social-media-icons">
                    <a
                        className="footer-social-media-icon"
                        href={Bio.facebook}
                        target="display"
                    >
                        <FacebookIcon />
                    </a>
                    <a
                        className="footer-social-media-icon"
                        href={Bio.x}
                        target="display"
                    >
                        <X />
                    </a>
                    <a
                        className="footer-social-media-icon"
                        href={Bio.linkedin}
                        target="display"
                    >
                        <LinkedInIcon />
                    </a>
                    <a
                        className="footer-social-media-icon"
                        href={Bio.instagram}
                        target="display"
                    >
                        <InstagramIcon />
                    </a>
                </div>
                <p className="footer-copyright">
                    &copy; 2023 {Bio.name}. All rights reserved.
                </p>
            </footer>
        </div>
    );
};

export default Footer;
