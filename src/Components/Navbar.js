import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav>
      <div className="nav__logo">
        <a href="#Home">WebDev</a>
      </div>
      <ul className={`nav__links ${open ? "open" : ""}`}>
        <li className="link">
          <a href="#Home">Home</a>
        </li>
        <li className="link">
          <a href="#Description">Description</a>
        </li>
        <li className="link">
          <a href="#Importance">Importance</a>
        </li>
      </ul>
      <div className="toggle__btn" onClick={toggleMenu}>
        <i className="ri-menu-line"></i>
      </div>
    </nav>
  );
};

export default Navbar;
