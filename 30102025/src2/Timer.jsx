import React, { useState, useRef } from 'react';

const Timer = () => {     
    const [time,setTime] = useState(0)
    const intervalRef = useRef(null)

    const handleStart = () => {
        if(intervalRef.current !== null) return
        
        intervalRef.current = setInterval(() => {
            setTime(prevTime => prevTime + 1)
        }, 1)
    }

    const handleStop = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    };

    const handleReset = () => {
        handleStop()
        setTime(0)
    }
    
    return (
      <>
        <h1>Licznik</h1>
        <div>
            <h2>{time}</h2>
          <button onClick={handleStart}>Start</button> 
          <button onClick={handleStop}>Stop</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </>
    );
}

export default Timer