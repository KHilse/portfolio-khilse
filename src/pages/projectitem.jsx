import React from 'react';

const ProjectItem = props => {
    return (
        <div className={props.class}>
            <p><a href={props.url}>{props.title}</a></p>
            <img className="project-screenshot" src={props.screenshot} />
        </div>
    )
}


export default ProjectItem;