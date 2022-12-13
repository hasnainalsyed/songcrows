import React from "react";
import SocialIcons from "./SocialIcons";

const Navbar = () => {

  const navbar = [
    {
      link: "#about",
      name: "About",
    },
    {
      link: "#story",
      name: "Story",
    },
    {
      link: "#roadmap",
      name: "Roadmap",
    },
    {
      link: "#team",
      name: "Team",
    },
  ];

  return (
    <nav className="navbar navbar-expand-lg position-sticky top-0">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src="/logo.png" alt="Song Crows" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {navbar.map(({ name, link }) => {
              return (
                <li className="nav-item" key={link}>
                  <a className="nav-link" href={link}>
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>
          <SocialIcons />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
