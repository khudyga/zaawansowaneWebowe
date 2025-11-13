import React, { useState, createContext } from 'react';
export const ScoreContext = createContext()

const ScoreProvider = ({children}) => {
    const [score, setScore] = useState(0)
    const addPoint = (points) => setScore(score + points)
        return(
            <ScoreContext.Provider value={{score, addPoint}}>
                {children}
            </ScoreContext.Provider>
        )
    
}

export default ScoreProvider