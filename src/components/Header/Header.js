import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h3 className="header-site-text">
        <span className="header-site-text-hepsiburada">hepsiburada</span>
        <span className="header-site-text-extension">.com</span>
      </h3>
      <h4 className="header-info-text">
        <span className="header-info-text-link">Link</span>
        <span className="header-info-text-vote">VOTE</span>
        <span className="header-info-text-challenge"> Challenge</span>
      </h4>
    </header>
  );
};

export default Header;
