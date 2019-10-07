import React from "react";
import DrawerTogglerButton from "./sideDrawer/DrawerTogglerButton";
import {Link} from 'react-router-dom';
import styled from "@emotion/styled";

const Style = styled.div`
.navbar {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-color: #521751;
  height: 56px;
  /* text-align: center; */
  /* background-color: red; */
}

.navbar_items {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
  background-color: #f9f9f9;
}

.navbar_logo a {
  font-size: 1.5rem;
  color: #d4af37;
  margin-left: 1rem;
}

.spacer {
  flex: 1;
}

.link_items ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.link_items li {
  padding: 0.5rem;
}

.link_items a {
  color: black;
  text-decoration: none;
}
.link_items a:hover,
.link_items a:active {
  color: #d4af37;
}

@media (max-width: 765px) {
  .link_items {
    display: none;
  }
}

@media (min-width: 769px) {
  .toolbar_toggle-button {
    display: none;
  }
  .navbar_logo {
    margin-left: 0;
  }
}

`



const Navbar = props => (
  <Style>
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
          <li>
          <Link to="/market">Market</Link>
          </li>
          </ul>
          </div>
          </nav>
          </header>
          </Style>
          );
          
          export default Navbar;
