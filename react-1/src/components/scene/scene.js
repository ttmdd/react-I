import React from 'react';



function Scene(props) {

    return(
        <div>
            {props.sceneText.map(text => <p key={text}>{text}</p>)}
        </div>
    )
}

export default Scene; 