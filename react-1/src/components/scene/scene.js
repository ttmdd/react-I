import React from 'react';
import {Frame} from '../../styled'




function Scene(props) {

    return(
        <div> 
             {props.sceneText.map(text => 
             <div key={text}>
                <Frame>
                     {text}
                </Frame>
             </div>)}
        </div>
    )
}

export default Scene; 