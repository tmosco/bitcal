import React from "react";
import "./Navbar.css";
import DrawerTogglerButton from "../SideDrawer/DrawerTogglerButton";


const Navbar = props => (
  <header className="bar">
    <nav className="navbar_items">
    <div className="toolbar_toggle-button"> <DrawerTogglerButton click={props.drawerClickHandler}/>
    </div>
      <div className="navbar_logo"><a href="/">BITCAL</a></div>
      <div className="spacer"> </div>
      <div className="link_items">
        <ul>
          <li>
            <a href="/#">Home</a>
          </li>
          <li>
            <a href="/#">Accounts</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Navbar;
