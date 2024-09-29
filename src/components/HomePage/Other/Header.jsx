import React from "react";
import "./header.css"

import LOGO from "../../../assets/homepage/other/FinalLogo.png"

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <img src={LOGO} alt="Logo" className="logo" />
        <nav>
          <main>
            <a>About</a>
            <a>Events</a>
            <a>Speakers</a>
            <a>FAQ</a>
            <a>Sponsers</a>
          </main>
        </nav>
      </div>
    </header>
  );
};

export default Header;
