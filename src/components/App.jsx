import React, { useEffect, useState } from 'react';
import Box from './Box'

export default function App() {

    const [boxesTurnedOn, setBoxCount] = useState(0);
    
    return (
        <div>
            <h1>Box Count: {boxesTurnedOn}</h1>
            <div className='boxContainer'>
                <Box boxesTurnedOn={boxesTurnedOn} countChange={(countState) => setBoxCount(countState)}/>
                <Box boxesTurnedOn={boxesTurnedOn} countChange={(countState) => setBoxCount(countState)}/>
                <Box boxesTurnedOn={boxesTurnedOn} countChange={(countState) => setBoxCount(countState)}/>
                <Box boxesTurnedOn={boxesTurnedOn} countChange={(countState) => setBoxCount(countState)}/>
            </div>
        </div>
    );
}

