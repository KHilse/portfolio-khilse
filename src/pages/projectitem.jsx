import React from 'react';

const ProjectItem = props => {
    let translation = {transform: `translate(-50%, 30%) rotate(${props.angle}deg)`};
    return (
        <div className="project-item" style={translation}>
            <p><a href={props.url}>{props.title}</a></p>
            <img className="project-screenshot" src={props.screenshot} />
        </div>
    )
}


export default ProjectItem;