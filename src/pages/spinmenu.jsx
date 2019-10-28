import React, { useState, useEffect } from "react";
import MenuItem from './menuitem';
import { menuItems } from './textcontent';
import { useSwipeable } from 'react-swipeable';

const SpinMenu = props => {

	const [items, setItems] = useState(menuItems);
	const [navAngleOffset] = useState(props.navAngleOffset);
	const [style, setStyle] = useState('');

	// The menu rotates, so left/right reversal makes more sense from a UX perspective :-)
	const handlers = useSwipeable({
		onSwipedLeft: () => props.handleNav('right'),
		onSwipedRight: () => props.handleNav('left'),
		preventDefaultTouchmoveEvent: true,
		trackMouse: true
	});

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
			project[1] -= 200;
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
	}

	let projectInfo = items.map((p,i) => {
		let [title, angle] = p;
		angle += props.navAngleOffset;
		//console.log(`title=${title}, angle=${angle}`);
		return (
			<MenuItem key={i} title={title} angle={angle} />
		);		
	})

	return (
		<div className="menu-radius" style={{style}} {...handlers}>
			{projectInfo}
		</div>
	)
}

export default SpinMenu;