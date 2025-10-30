import React, { useState, useRef, useEffect } from 'react';

const Animation=()=>{
    const [isAnimating, setIsAnimating] = useState(true)
    const [fontSize, setFontSize] = useState(20)
    const intervalRef = useRef(null)

    useEffect(() => {
        if(isAnimating){
            intervalRef.current = setInterval(() => {
               setFontSize(prevSize => (prevSize===20? 26:20)) 
            }, 500);
        }
        return () => clearInterval(intervalRef.current)
    }, [isAnimating])

    const handleStart = () => {
        setIsAnimating(true)
    }

    const handleStop = () => {
        setIsAnimating(false)
        clearInterval(intervalRef.current)
    }

    return (
      <>
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h1
            style={{ fontSize: `${fontSize}px`, transition: "fontSize .3s" }}
          >karolinka</h1>
          <button onClick={handleStart} disabled={isAnimating}>Start</button>
          <button onClick={handleStop} disabled={!isAnimating}>Stop</button>
        </div>
      </>
    );
}

export default Animation