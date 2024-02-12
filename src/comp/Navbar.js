import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import "./style/st.css";
import { useState } from "react";
const Navbar = () => {
  const [open, setopen] = useState(false);
  return (
    <nav className="nav" style={{backgroundColor:"whitesmoke"}}>
      <div className="logo">News-update-app</div>

      <ul className="ull">
        <div
          className="menu"
          onClick={() => {
            setopen(!open);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div id="disnav" className={open ? "open" : ""} style={{}}>
          <div className="t">
            {/* <NavLink to="/Home">
              <li className="li">Home</li>
            </NavLink> */}
            <NavLink to="/Link1">
              <li className="li">International</li>
            </NavLink>
            <NavLink to="/Link2">
              <li className="li">News India</li>
            </NavLink>
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
