import React from 'react';

const TextItem = props => {
    return (
        <div className={props.class} dangerouslySetInnerHTML={props.content}></div>
    )
}


export default TextItem;