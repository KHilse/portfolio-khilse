import React from 'react';

const TextItem = props => {
    return (
        <div className={props.class} dangerouslySetInnerHTML={{ __html: props.content.content}}></div>
    )
}


export default TextItem;