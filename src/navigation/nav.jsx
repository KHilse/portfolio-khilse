import React from "react";
import {Link} from "react-router-dom";

const Nav = props => {
	return (
		<nav className="nav">
		  <ul onClick={props.handleNavClick}>
			<li id="left" className="nav-item">&lt;</li>
			<li id="right" className="nav-item">&gt;</li>
	      </ul>
      </nav>
	)
}

export default Nav;