import React from 'react';
import './SideDrawer.css';
import {Link} from 'react-router-dom';


const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if(props.show){
        drawerClasses= 'side-drawer open';
    }
    return(
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
    );
};

export default SideDrawer;