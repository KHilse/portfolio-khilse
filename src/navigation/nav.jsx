import React from "react";
import {Link} from "react-router-dom";

const Nav = props => {
	return (
		<nav>
		  <ul onClick={props.handleNavClick}>
			<li id="left" className="menu-item">&lt;</li>
	        {/* <li id="1" className="menu-item">Bio</li>
	        <li id="2" className="menu-item">Project: Asteroid Defense</li>
	        <li id="3" className="menu-item">Project: Pedals and Pints</li>
	        <li id="4" className="menu-item">Project: Project 3</li> */}
			<li id="right" className="menu-item">&gt;</li>
	      </ul>
      </nav>
	)
}

export default Nav;