import React, { useState, useEffect } from "react";
import ProjectItem from './projectitem';
import TextItem from './textitem';
import { textContent } from './textcontent';

const SpinMenu = props => {

	const [items, setItems] = useState(textContent);
	const [navAngleOffset, setNavAngleOffset] = useState(props.navAngleOffset);
	const [style, setStyle] = useState('');

	useEffect(() => {
		window.addEventListener('resize', updateDimensions);
		setTimeout(handleTimeout, 500); // Add an initial delay to the spin menu so everything renders before the spin starts
	}, [navAngleOffset]);

	// function getDerivedStateFromProps(props,state) {
	// 	console.log('props updated, new offset is:', props.navAngleOffset);
	// 	state.navAngleOffset = props.navAngleOffset;
	// }

	function handleTimeout() {
		let proj = [...items];
		proj.forEach(project => {
			project[4] -= 180;
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
		let [type, title, content, screenshot, angle] = p;
		angle += props.navAngleOffset;
		let elem = <></>;
		console.log(`type=${type}, title=${title}, content=${content}, screenshot=${screenshot}, angle=${angle}`)
		switch (type) {
			case 'text':
				elem = <TextItem key={i} title={title} content={content} screenshot={screenshot} angle={angle} />;
				break;
			case 'project':
				elem = <ProjectItem key={i} title={title} url={content} screenshot={screenshot} angle={angle} />;
				break;
			default:
				break;
		}

		return elem;		
	})

	return (
		<div className="project-radius" style={{style}}>
			{projectInfo}
		</div>
	)
}

export default SpinMenu;