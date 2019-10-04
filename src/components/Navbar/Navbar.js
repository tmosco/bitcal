import React from "react";
import "./Navbar.css";
import DrawerTogglerButton from "../SideDrawer/DrawerTogglerButton";
import {Link} from 'react-router-dom';


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
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/actionpage">Actionpage</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Navbar;
