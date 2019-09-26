import React from "react";
import ProjectItem from './projectitem';

class Projects extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			projects: [
				["Asteroid Defense", "https://khilse.github.io/asteroid-defense/index.html", "./asteroid-defense.png", 180],
				["Pedals and Pints", "https://pedals-and-pints-v1.herokuapp.com/", "./pedals-and-pints.png", 210]
			],
			navAngleOffset: this.props.navAngleOffset
		}
	}
	
	componentDidMount() {
		window.addEventListener('resize', this.updateDimensions);
		setTimeout(this.handleTimeout.bind(this), 1000);
	}

	static getDerivedStateFromProps(props,state) {
		console.log('props updated, new offset is:', props.navAngleOffset)
		state.navAngleOffset = props.navAngleOffset
	}

	handleTimeout() {
		let state = JSON.parse(JSON.stringify(this.state));
		state.projects.forEach(project => {
			project[3] -= 180;
		})
		this.setState(state);
	}

	updateDimensions() {
		console.log('window dimensions changed')
		// TODO: scale projectitems accordingly
	}

	render() {
		let projects = this.state.projects.map((p,i) => {
			let [title, url, screenshot, angle] = p;
			angle += this.state.navAngleOffset;
			return (
				<ProjectItem key={i} title={title} url={url} screenshot={screenshot} angle={angle} />
			)
		})

		return (
			<div className="project-radius">
				{projects}
			</div>
		)
	}
}

export default Projects;