import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaPlusCircle, FaHome, FaArchive, FaLanguage } from "react-icons/fa";
import { FiLogOut, FiSun, FiMoon } from "react-icons/fi";
import { LocaleContext, ThemeContext } from "../../contexts";

// import "../../styles/index.css";
import "./Navigation.css";

function Navigation({ logout }) {
  const { toggleLocale } = useContext(LocaleContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navigation">
      <div className="c-pages-nav">
        <Link to="/" className="linked-nav">
          <FaHome />
        </Link>
        <Link to="/add" className="linked-nav">
          <FaPlusCircle />
        </Link>
        <Link to="/archived" className="linked-nav">
          <FaArchive />
        </Link>
      </div>
      <div className="c-functional-nav">
        <button onClick={toggleLocale} className="functional-nav functional-nav__locale">
          <FaLanguage />
        </button>
        <button onClick={toggleTheme} className="functional-nav functional-nav__theme">
          {theme === "light" ? <FiSun /> : <FiMoon />}
        </button>
        <button onClick={logout} className="functional-nav functional-nav__logout">
          <FiLogOut />
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
