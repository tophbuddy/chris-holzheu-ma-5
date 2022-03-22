import React, { useState } from 'react';

import './Box.css';

export default function Box(props) {

    const [isBoxOn, setBoxState] = useState(false);
    const toggleBox = () => {
        setBoxState(!isBoxOn)
    };
    
    let className = "box";

    if (isBoxOn) {
        className += " " + 'black';

    } else {
        className += " " + 'white';
    }

    const handleCount = () => {
        if (isBoxOn) {
            props.countChange(props.boxesTurnedOn - 1)
        } else {
            props.countChange(props.boxesTurnedOn + 1)
        }
    };

    return (<div className = {className} onClick={() => {
        toggleBox();
        handleCount();
        }}>
    
    </div>);

}