import React from "react";
import Logo from "./Logo.svg";

function Header() {
  return (
    <header className="header">
      <img className="logo" src={Logo} alt="logo" />
    </header>
  );
}

export default Header;
