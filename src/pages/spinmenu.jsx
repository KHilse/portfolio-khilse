import React, { useState, useEffect } from "react";
import ProjectItem from './projectitem';

const SpinMenu = props => {

	const [items, setItems] = useState([
		["Asteroid Defense", "https://khilse.github.io/asteroid-defense/index.html", "./asteroid-defense.png", 180],
		["Pedals and Pints", "https://pedals-and-pints-v1.herokuapp.com/", "./pedals-and-pints.png", 240]
	]);
	const [navAngleOffset, setNavAngleOffset] = useState(props.navAngleOffset);
	const [style, setStyle] = useState('');

	useEffect(() => {
		window.addEventListener('resize', updateDimensions);
		setTimeout(handleTimeout, 1000);
	}, [navAngleOffset]);

	// function getDerivedStateFromProps(props,state) {
	// 	console.log('props updated, new offset is:', props.navAngleOffset);
	// 	state.navAngleOffset = props.navAngleOffset;
	// }

	function handleTimeout() {
		let proj = [...items];
		proj.forEach(project => {
			project[3] -= 180;
		})
		setItems(proj);
	}

	function updateDimensions(e) {
		console.log('window dimensions changed', e.target.innerHeight, e.target.innerWidth);
		setStyle({
			width: e.target.innerHeight,
			height: e.target.innerHeight,
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
		});
		// TODO: scale projectitems accordingly
	}

	let projectInfo = items.map((p,i) => {
		let [title, url, screenshot, angle] = p;
		angle += props.navAngleOffset;
		return (
			<ProjectItem key={i} title={title} url={url} screenshot={screenshot} angle={angle} />
		)
	})

	return (
		<div className="project-radius" style={{style}}>
			{projectInfo}
		</div>
	)
}

export default SpinMenu;