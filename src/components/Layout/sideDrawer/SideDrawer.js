import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const Style = styled.div`
  .side-drawer {
    height: 100%;
    background: #f9f9f9;
    box-shadow: 1px 0px 7px rgba(0, 0, 0, 5);
    position: fixed;
    top: 0;
    left: 0;
    width: 70%;
    max-width: 400px;
    z-index: 200;
    transform: translateX(-100%);
    transition: transform 0.3s ease-out;
  }
  .side-drawer.open {
    transform: translateX(0);
  }
  .side-drawer ul {
    height: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .side-drawer li {
    margin: 0.5rem 0;
  }
  .side-drawer a {
    color: black;
    text-decoration: none;
    font-size: 1.2rem;
  }
  .side-drawer a:hover,
  .side-drawer a:active {
    color: #d4af37;
  }
  @media (min-width: 769px) {
    .side-drawer {
      display: none;
    }
  }
`;

const SideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <Style>
      <nav className={drawerClasses}>
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
      </nav>
    </Style>
  );
};

export default SideDrawer;
