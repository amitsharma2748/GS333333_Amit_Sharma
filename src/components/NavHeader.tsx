import React from "react";
import logo from "../assets/G_Logo.svg";

const NavHeader = () => {
  return (
  
      <div className="logo">
        <img src={logo} alt="GSyn" />
        <header>
          <h1>Data Viewer App</h1>
          <i className="fas fa-user-circle user-icon"></i>
        </header>
        <span>GSynergy</span>
      </div>
     
  );
};

export default NavHeader;
