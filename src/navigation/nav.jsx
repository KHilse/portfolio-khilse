import React from "react";
import { useSwipeable } from 'react-swipeable';

const Nav = props => {

	// The menu rotates, so left/right reversal makes more sense from a UX perspective :-)
	const handlers = useSwipeable({
		onSwipedLeft: () => props.handleNav('right'),
		onSwipedRight: () => props.handleNav('left'),
		preventDefaultTouchmoveEvent: true,
		trackMouse: true
	});

	return (
		<nav className="nav-container">
		  <ul className="nav-bar" onClick={props.handleNavClick} {...handlers}>
			<li id="left" className="nav-item">&lt;</li>
			<li id="right" className="nav-item">&gt;</li>
	      </ul>
      </nav>
	)
}

export default Nav;