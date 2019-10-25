import React from 'react';

const ProjectItem = props => {
    return (
        <div className={props.class}>
            <div className="project-skills" dangerouslySetInnerHTML={{ __html: props.content.skills}}>
            </div>
            <div className="project-content">
            <h2>{props.content.title}</h2>
            <span className="project-link"><a href={props.content.link} target="_new">App Link</a> <a href="#"></a></span>
            {(props.content.githubServer !== '') ?
                <span className="project-link"><a href={props.content.githubServer} target="_new">Server Repo</a></span>
            :
                <></>
            }
            {(props.content.githubClient !== '') ?
                <span className="project-link"><a href={props.content.githubClient} target="_new">Client Repo</a></span>
            :
                <></>
            }
            <p>{props.content.description}</p>
            <img className="project-screenshot" src={props.content.image} />
            </div>
        </div>
    )
}


export default ProjectItem;