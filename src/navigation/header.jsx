import React from "react";

const Header = props => {

	let shape1Style = {left: props.shape1[0], top: props.shape1[1], transform: `rotate(${props.shape1[2]}deg) scale(10,10)`};
	let shape2Style = {left: props.shape2[0], top: props.shape2[1], transform: `rotate(${props.shape2[2]}deg) scale(10,10)`};

	return (
		<div className="header">

			<div id="shape-1" style={shape1Style}>
				<svg width="400" height="400">
					<path d="M 200 0 Q 0 100 100 400 400 200 250 100 200 0 Z" stroke="none" fill="#A0C0C0" fill-opacity="0.5" />
				</svg>
			</div>
			<div id="shape-2" style={shape2Style}>
				<svg width="400" height="400">
					<path d="M 200 0 Q 0 100 100 400 400 200 250 100 200 0 Z" stroke="none" fill="#C0A0C0" fill-opacity="0.5" />
				</svg>
			</div>

			<h1>Kirk Hilse</h1>
			<h2>Unicorn Developer</h2>

		</div>
	)
}

export default Header;