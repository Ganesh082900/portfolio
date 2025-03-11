import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { Bio } from "../data/Bio";
import logo from "../assets/profile.jpg";

const navbarContainer = `flex justify-between items-center bg-gray-950 py-4 px-4 lg:px-10`;
const logoWrapper = `flex justify-center items-center gap-2 cursor-pointer`;
const logostyle = `rounded-full w-[10vw] sm:w-[8vw] md:w-[6vw] lg:w-[4vw] xl:w-[3vw] border-none`; // Ensure no border
const nav = `hidden md:flex justify-center items-center list-none gap-10`;
const navLink = `hover:text-cyan-400 text-xl font-semibold duration-500 cursor-pointer`;
const btnStyle =
  "hidden lg:flex bg-gradient-to-r from-cyan-500 to-blue-500 shadow hover:shadow-cyan-400 duration-500 text-gray-950 rounded-lg p-3 px-8";
const faWrapper =
  "md:hidden cursor-pointer text-cyan-600 hover:text-cyan-400 duration-200";
const mobileNav = "md:hidden h-screen bg-gray-950 w-1/2 fixed right-0 p-2";
const mobileNavUl = "flex flex-col gap-7 justify-center items-center";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const sections = ["about", "skills", "projects", "contact"];

  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="sticky top-0 text-cyan-600 z-10">
        <div className={navbarContainer}>
          {/* Logo Section */}
          <div onClick={scrollToTop} className={logoWrapper} style={{ border: "none" }}>
            <div>
              <img className={logostyle} src={logo} alt="Logo" style={{ border: "none" }} />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className={nav}>
            {sections.map((section, index) => (
              <li key={index} className={navLink}>
                <Link to={section} smooth duration={500}>
                  {capitalizeFirstLetter(section)}
                </Link>
              </li>
            ))}
          </div>

          {/* LinkedIn Button */}
          <button className={btnStyle}>
            <a href={Bio.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </button>

          {/* Mobile Menu Icon */}
          <div onClick={() => setIsMobile(!isMobile)} className={faWrapper}>
            {isMobile ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobile && (
          <div className={mobileNav}>
            <ul className={mobileNavUl}>
              {sections.map((section, index) => (
                <li key={index} className={navLink}>
                  <Link
                    onClick={() => setIsMobile(!isMobile)}
                    to={section}
                    smooth
                    duration={500}
                  >
                    {capitalizeFirstLetter(section)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
