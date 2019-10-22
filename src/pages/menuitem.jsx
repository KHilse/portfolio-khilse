import React from 'react';

const MenuItem = props => {
    let translation = {transform: `translate(-50%, 30%) rotate(${props.angle}deg)`};
    return (
        <div className="menu-item" style={translation}>
            <p>{props.title}</p>
        </div>
    )
}


export default MenuItem;