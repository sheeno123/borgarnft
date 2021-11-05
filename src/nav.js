import React from "react";
// import App from "./App";
import logo from "./images/borgar-logo.png";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <a href="/">
        <img src={logo} alt="" style={{ width: "150px" }} />
      </a>
      <div className="nav-copy">
        <a href="#team" className="links">
          Meet the Team
        </a>
        <a href="#faq" className="links">
          FAQs
        </a>
        <Link to="/app" className="mint-me">
          Mint Me
        </Link>
      </div>
    </nav>
  );
}
console.log("This site was created by Steven Johnson (@TechJohnson)");

export default Nav;
