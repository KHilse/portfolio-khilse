import React from "react";
import ProjectItem from './projectitem';

class Projects extends React.Component {

	constructor (props) {
		super (props);

		this.state = {
			projects: [
				["Asteroid Defense", "https://khilse.github.io/asteroid-defense/index.html", "./asteroid-defense.png"],
				["Pedals and Pints", "https://pedals-and-pints-v1.herokuapp.com/", "./pedals-and-pints.png"]
			]
		}
	}

	render() {

		let projects = this.state.projects.map((p,i) => {
			let [title, url, screenshot] = p;

			return (
				<ProjectItem title={title} url={url} screenshot={screenshot} />
			)
		})


		return (
			<div>
				{projects}
			</div>
		)
	}
}

export default Projects;