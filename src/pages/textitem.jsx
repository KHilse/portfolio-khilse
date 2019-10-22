import React from 'react';

const TextItem = props => {
    let translation = {transform: `translate(-50%, 30%) rotate(${props.angle}deg)`};
    return (
        <div className="text-item" style={translation}>
            <p>{props.title}</p>
            {(props.screenshot !== '') ? <img className="project-screenshot" src={props.screenshot} /> : <></> }
            {(props.angle % 360 === 0) ?
                <div className="text-item-content-expanded" dangerouslySetInnerHTML={{ __html: props.content}}></div>
            :
                <div className="text-item-content-collapsed" dangerouslySetInnerHTML={{ __html: props.content}}></div>
            }
        </div>
    )
}


export default TextItem;