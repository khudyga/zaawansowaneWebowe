import { useState } from "react";
import React from 'react'

function App(){
  const [fortunes, setFortunes] = useState(['Wrozba1', 'Wrozba2', 'Wrozba3'])
  const [fortune, setFortune] = useState(null)
  const [value, setValue] = useState('')

  const handleShowFortune = () => {
    const index = Math.floor(Math.random() * fortunes.length)
    setFortune(fortunes[index])
  }

  const handleInputChange = (e) => {
    setValue(e.target.value)
  }

  const handleAddFortune = () => {
    if(value===''){
      alert('Wpisz cos do inputa')
    } else {
      const newFortunes = [...fortunes, value]
      setFortunes(newFortunes)
      alert(`Wrozba zostala dodana. Aktualne wrozby: ${fortunes}, ${value}`)
      setValue('')
  }}

  return (
    <>
    <button onClick={handleShowFortune}>Zobacz wrozbe</button>
    <input type="text" value={value} onChange={handleInputChange}/>
    <button onClick={handleAddFortune}>Dodaj wrozbe</button>
    {fortune ? <h1> {fortune} </h1> : null}
    </>
  )
}
 
export default App;