import React from "react";
import {Link} from "react-router-dom";

const Nav = props => {
	return (
		<nav>
		  <ul>
	        <li class="menu-item">
	          <Link to="/">Home</Link>
	        </li>
	        <li class="menu-item">
	          <Link to="/about">About</Link>
	        </li>
	        <li class="menu-item">
	          <Link to="/blog">Blog</Link>
	        </li>
	        <li class="menu-item">
	          <Link to="/projects">Projects</Link>
	        </li>
	      </ul>
      </nav>
	)
}

export default Nav;