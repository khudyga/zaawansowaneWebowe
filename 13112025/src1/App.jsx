import { useState } from 'react'
import './App.css'
import ScoreProvider from './ScoreProvider'
import ScoreDisplay from './ScoreDisplay'
import AddPoints from './AddPoints'

function App() {

  return (
    <>
      <ScoreProvider>
        <ScoreDisplay/>
        <AddPoints/>
      </ScoreProvider>
    </>
  )
}

export default App
