import React from 'react'
import { useState } from 'react';

function App() {
  const [value, setValue] = useState('')

  const handleOnChange = (e) => {
      setValue(e.target.value.toUpperCase())
  } 

  const handleOnClick = () => setValue('')
  

  return(
    <>
      <input type="text" className='' placeholder='Wpisz..' value={value} onChange={handleOnChange}/>
      <button onClick={handleOnClick}>Reset</button>
      <h1>{value}</h1>
    </>
  )
}
 
export default App;