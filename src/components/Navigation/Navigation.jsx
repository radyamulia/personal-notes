import React from "react";
import { Link } from "react-router-dom";
import { FaPlusCircle, FaHome, FaArchive } from "react-icons/fa";

import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <Link to="/" className="linked-nav">
        <FaHome />
      </Link>
      <Link to="/add" className="linked-nav">
        <FaPlusCircle />
      </Link>
      <Link to="/archived" className="linked-nav">
        <FaArchive />
      </Link>
    </nav>
  );
}

export default Navigation;
