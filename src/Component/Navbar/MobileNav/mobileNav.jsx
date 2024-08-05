import "./mobileNav.css";

const mobileNav = ({ isOpen, toggleMenu }) => {
  const logo = "src/assets/images/logo.png";
  const handleDownload = () => {
    console.log("Downloading...");
  };
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img className="logo" src={logo} alt="logo" />
          <ul>
            <li>
              <a className="menu-item" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="menu-item" href="#">
                Skills
              </a>
            </li>
            <li>
              <a className="menu-item" href="#">
                Projects
              </a>
            </li>
            <li>
              <a className="menu-item" href="#">
                Contact
              </a>
            </li>
          </ul>
          <br />
          <button className="contact-btn" onClick={handleDownload}>
            Hire Me
          </button>
        </div>
      </div>
    </>
  );
};

export default mobileNav;
